import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenRouterEmbeddings } from "./embedding.service.js";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { client } from "../config/chroma.js";
export const ingestPdf = async (filePath) => {
    //load pdf into documents
    const loader = new PDFLoader(filePath);
    const document = await loader.load();
    //split into chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkOverlap: 50,
        chunkSize: 500,
    });
    const chunksDocs = await splitter.splitDocuments(document);
    const cleanedDocs = chunksDocs.map((doc) => {
        return {
            ...doc,
            metadata: {
                source: doc.metadata.source || "unknown",
                page: doc.metadata.loc?.pageNumber || null,
            },
        };
    });
    //create embedding instance
    const embeddings = new OpenRouterEmbeddings({});
    try {
        const vectorStore = await Chroma.fromDocuments(cleanedDocs, embeddings, {
            collectionName: "ai-agent-1536",
            index: client,
        });
        console.log("pushed successfully", vectorStore);
    }
    catch (error) {
        console.log(error, "error in pushing to db");
    }
};
//# sourceMappingURL=ingest.service.js.map