export declare const chatWithPdf: (question: string, sessionId: string) => Promise<{
    answer: string;
    sources: {
        page: number;
        source: string;
    }[];
} | undefined>;
//# sourceMappingURL=chat.service.d.ts.map