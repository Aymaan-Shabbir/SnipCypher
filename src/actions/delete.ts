"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const DeleteSnippet = async (id: number) => {
  await prisma.snippets.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  //using on demand caching
  redirect("/");
};
