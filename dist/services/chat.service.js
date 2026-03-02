import { ChatPromptTemplate, MessagesPlaceholder, } from "@langchain/core/prompts";
import { getRetriever } from "./retriever.service.js";
import { RunnablePassthrough, RunnableSequence, } from "@langchain/core/runnables";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { model } from "./llm.service.js";
import { formatDocs } from "../utils/formatDocs.js";
import { Chat } from "../models/chat.model.js";
import { responseSchema } from "../models/response.model.js";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
export const chatWithPdf = async (question, sessionId) => {
    const retriever = await getRetriever();
    let chatDoc = await Chat.findOne({ sessionId });
    if (!chatDoc) {
        chatDoc = await Chat.create({
            sessionId,
            messages: [],
        });
    }
    const chatHistory = chatDoc.messages.map((msg) => {
        return msg.role === "user"
            ? new HumanMessage(msg.content)
            : new AIMessage(msg.content);
    });
    const parser = StructuredOutputParser.fromZodSchema(responseSchema);
    const formatInstructions = parser
        .getFormatInstructions()
        .replace(/{/g, "{{")
        .replace(/}/g, "}}");
    const prompt = ChatPromptTemplate.fromMessages([
        [
            "system",
            `
You are a helpful assistant.

Answer ONLY using the provided context.
Always provide a detailed, complete answer using full sentences — never answer with a single word or phrase.
Explain your answer thoroughly based on the context provided.
If the answer is not in context, say "I don't know".

Return response strictly in this JSON format with no markdown, no code blocks, no extra text:

${formatInstructions}
`,
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
            chat_history: () => chatHistory.slice(-5),
        },
        prompt,
        model,
        parser,
    ]);
    try {
        const response = await ragChain.invoke(question);
        chatDoc.messages.push({ role: "user", content: question }, { role: "assistant", content: JSON.stringify(response) });
        await chatDoc.save();
        console.log(response);
        return response;
    }
    catch (err) {
        console.log("error getting response from llm");
    }
};
//# sourceMappingURL=chat.service.js.map