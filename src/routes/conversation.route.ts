import express from "express";
import { Chat } from "../models/chat.model.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const sessionId = req.params.userId;
  if (sessionId) {
    const response = await Chat.findOne({ sessionId });
    return res.json(response?.messages);
  }
  return res.json({ message: "no userid provided" });
});

export { router as conversationRoutes };
