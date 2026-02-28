import { Embeddings } from "@langchain/core/embeddings";
export class OpenRouterEmbeddings extends Embeddings {
    async embedDocuments(texts) {
        return Promise.all(texts.map((text) => this.embedQuery(text)));
    }
    async embedQuery(text) {
        const response = await fetch("https://openrouter.ai/api/v1/embeddings", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "openai/text-embedding-3-small",
                input: text,
            }),
        });
        const data = await response.json();
        const embedding = data.data[0].embedding;
        return embedding;
    }
}
//# sourceMappingURL=embedding.service.js.map