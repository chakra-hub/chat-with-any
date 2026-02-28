import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OpenRouterEmbeddings } from "./embedding.service.js";
import { client } from "../config/chroma.js";
export const getRetriever = async () => {
    const embeddings = new OpenRouterEmbeddings({});
    const vectorStore = await Chroma.fromExistingCollection(embeddings, {
        collectionName: "ai-agent-1536",
        index: client,
    });
    return vectorStore.asRetriever({
        k: 3,
    });
};
//# sourceMappingURL=retriever.service.js.map