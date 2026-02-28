import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { getRetriever } from "./retriever.service.js";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { model } from "./llm.service.js";
import { formatDocs } from "../utils/formatDocs.js";
import { Chat } from "../models/chat.model.js";

export const chatWithPdf = async (question: string, sessionId: string) => {
  const retriever = await getRetriever();
  let chatDoc = await Chat.findOne({ sessionId });
  if (!chatDoc) {
    chatDoc = await Chat.create({
      sessionId,
      messages: [],
    });
  }
  const chatHistory = chatDoc.messages.map((msg) => {
    return { role: msg.role, content: msg.content };
  });
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "You are a helpful assistant. Answer ONLY using the provided context. If answer is not in context, say 'I don't know'.",
    ],
    new MessagesPlaceholder("chat_history"),
    [
      "human",
      `Context:
      {context}

      Question:
      {question}
      `,
    ],
  ]);

  const ragChain = RunnableSequence.from([
    {
      context: retriever.pipe(formatDocs),
      question: new RunnablePassthrough(),
      chat_history: () => chatHistory,
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);
  try {
    const response = await ragChain.invoke(question);
    chatDoc.messages.push(
      { role: "user", content: question },
      { role: "assistant", content: response },
    );
    await chatDoc.save();
    const getAllChatbyId = await Chat.findOne({ sessionId });
    return getAllChatbyId;
  } catch (err) {
    console.log("error getting response from llm");
  }
};
