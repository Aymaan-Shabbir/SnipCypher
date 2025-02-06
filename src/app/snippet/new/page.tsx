import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default function Snippet() {
  async function createSnippet(formData: FormData) {
    // step 1 , make server request
    "use server";
    // step 2, collect data, extract data, from form.
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //step 3 ,call prisma client and create data

    const snippetData = await prisma.snippets.create({
      data: {
        title,
        code,
      },
    });
    // created a snippet with title and code.

    console.log("snippet created - ", snippetData);

    redirect("/");
  }

  return (
    <div>
      <form action={createSnippet}>
        <div className="flex flex-col gap-5">
          <div>
            <Label>Title</Label>
            <Input type="text" name="title" id="title" />

            <Label>Code</Label>
            <Textarea name="code" id="code" />
          </div>
        </div>
        <Button type="submit" className="my-3">
          Create
        </Button>
      </form>
    </div>
  );
}
