import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const connectMongoDB = async () => {
    await mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.error(err));
};
//# sourceMappingURL=mongo.js.map