/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/inferschematype.js" />
/// <reference types="mongoose/types/inferhydrateddoctype.js" />
/// <reference types="mongoose/types/inferrawdoctype.js" />
export declare const chatWithPdf: (question: string, sessionId: string) => Promise<(import("mongoose").Document<unknown, {}, {
    sessionId: string;
    messages: import("mongoose").Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    sessionId: string;
    messages: import("mongoose").Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null | undefined>;
//# sourceMappingURL=chat.service.d.ts.map