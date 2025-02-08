"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import createSnippet from "@/actions/create";
import { useActionState } from "react";

export default function Snippet() {
  const [formStateData, action] = useActionState(createSnippet, {
    message: "",
  });

  return (
    <div>
      <form action={action}>
        <div className="flex flex-col gap-5">
          <div>
            <Label>Title</Label>
            <Input type="text" name="title" id="title" />

            <Label>Code</Label>
            <Textarea name="code" id="code" />
          </div>
        </div>

        {formStateData.message && (
          <div className="p-3 bg-red-300 border-2 border-red-600 mt-3">
            {formStateData.message}
          </div>
        )}

        <Button type="submit" className="my-3">
          Create
        </Button>
      </form>
    </div>
  );
}
