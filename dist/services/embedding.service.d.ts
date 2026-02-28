import { Embeddings } from "@langchain/core/embeddings";
export declare class OpenRouterEmbeddings extends Embeddings {
    embedDocuments(texts: string[]): Promise<any[]>;
    embedQuery(text: string): Promise<any>;
}
//# sourceMappingURL=embedding.service.d.ts.map