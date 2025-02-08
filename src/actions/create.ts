"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 4) {
      return { message: "Title is required and must be longer" };
    }
    if (typeof code !== "string" || code.length < 8) {
      return { message: "Code is required and must be longer" };
    }

    await prisma.snippets.create({
      data: {
        title,
        code,
      },
    });

    // throw new Error("Some Internal server error");

    revalidatePath("/");
    //using on demand caching
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Some internal server error" };
    }
  }

  redirect("/");
}
export default createSnippet;
