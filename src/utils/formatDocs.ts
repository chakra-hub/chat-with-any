import { Document } from "@langchain/core/documents";

export const formatDocs = (docs: Document[]): string =>
  docs.map((d: Document) => d.pageContent).join("\n\n");
