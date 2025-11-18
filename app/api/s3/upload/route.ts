import { z } from "zod";

export const fileUploadSchema = z.object({
  fileName: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
  } catch {}
}
