import express from "express";
import { connectMongoDB } from "./config/mongo.js";
import { chatRoutes } from "./routes/chat.route.js";
import { conversationRoutes } from "./routes/conversation.route.js";
const app = express();
app.use(express.json());
await connectMongoDB();
app.use("/api/chat", chatRoutes);
app.use("/api/conversation", conversationRoutes);
app.listen(3000, () => {
    console.log("app running on port 3000");
});
//# sourceMappingURL=index.js.map