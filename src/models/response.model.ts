import z from "zod";

export const responseSchema = z.object({
  answer: z.string(),
  sources: z.array(
    z.object({
      page: z.number(),
      source: z.string(),
    }),
  ),
});
