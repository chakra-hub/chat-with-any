import { Document } from "@langchain/core/documents";

export const formatDocs = (docs: Document[]) => {
  return docs
    .map((doc, index) => {
      return `[Source ${index}
    Page: ${doc.metadata.page}]
    Source File: ${doc.metadata.source}
    
    Content: 
    ${doc.pageContent}
    `;
    })
    .join("\n");
};
