import mongoose from "mongoose";
export declare const Chat: mongoose.Model<{
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
}, mongoose.Document<unknown, {}, {
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
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
}, mongoose.DefaultSchemaOptions> & Omit<{
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        sessionId: string;
        messages: mongoose.Types.DocumentArray<{
            role: string;
            content: string;
            createdAt: NativeDate;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
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
    }, mongoose.DefaultSchemaOptions> & Omit<{
        sessionId: string;
        messages: mongoose.Types.DocumentArray<{
            role: string;
            content: string;
            createdAt: NativeDate;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            role: string;
            content: string;
            createdAt: NativeDate;
        }, {}, {}> & {
            role: string;
            content: string;
            createdAt: NativeDate;
        }>;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    sessionId: string;
    messages: mongoose.Types.DocumentArray<{
        role: string;
        content: string;
        createdAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        role: string;
        content: string;
        createdAt: NativeDate;
    }, {}, {}> & {
        role: string;
        content: string;
        createdAt: NativeDate;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=chat.model.d.ts.map