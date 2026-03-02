import express from "express";
import { chatWithPdf } from "../services/chat.service.js";

const router = express.Router();

router.post("/:userId", async (req, res) => {
  const { message, sessionId: sessionIdFromBrowser } = req.body;
  const sessionId = req.params.userId;
  if (sessionId === sessionIdFromBrowser) {
    const response = await chatWithPdf(message, sessionId);
    return res.json(response);
  }
  return res.json({ message: "no user exists" });
});

export { router as chatRoutes };
