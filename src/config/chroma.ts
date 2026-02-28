import { CloudClient } from "chromadb";
import dotenv from "dotenv";

dotenv.config();

export const client = new CloudClient({
  apiKey: process.env.CHROMADB_API_KEY!,
  tenant: "6a95ffa1-97bc-49a7-baf9-564d54e10f9d",
  database: "AIAgent",
});

export const chromaCollectionPromise = client.getOrCreateCollection({
  name: "ai-agent-1536",
});
