export const formatDocs = (docs) => {
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
//# sourceMappingURL=formatDocs.js.map