"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const DeleteSnippet = async (id: number) => {
  await prisma.snippets.delete({
    where: {
      id,
    },
  });
  redirect("/");
};
