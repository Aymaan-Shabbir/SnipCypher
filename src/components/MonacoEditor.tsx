"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippets } from "@prisma/client";
import { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions/save";

export default function SnippetEditor({ snippet }: { snippet: Snippets }) {
  const [code, setCode] = useState(snippet.code);
  const changeEventHandler = (value: string = "") => {
    setCode(value);
  };

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <form
        action={saveSnippetAction}
        className="flex items-center justify-between m-1 gap-2"
      >
        <h1 className="text-xl italic">Refine, fix, save.</h1>
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}
        theme="vs-dark"
      />
    </div>
  );
}
