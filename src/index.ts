import express from "express";
import { chatWithPdf } from "./services/chat.service.js";
import { connectMongoDB } from "./config/mongo.js";

const app = express();
app.use(express.json());
await connectMongoDB();

app.get("/", (req, res) => {
  res.json("working");
});

app.post("/chat", async (req, res) => {
  const { message, sessionId } = req.body;

  const response = await chatWithPdf(message, sessionId);
  res.json({ message: response });
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
