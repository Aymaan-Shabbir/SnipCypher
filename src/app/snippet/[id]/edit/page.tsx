import SnippetEditor from "@/components/MonacoEditor";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type SnippetDetailProps = {
  params: {
    id: string;
  };
};
const SnippetEdit: React.FC<SnippetDetailProps> = async ({ params }) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) notFound();
  return (
    <div className="flex gap-3 flex-col">
      <h1 className="text-3xl font-bold">Editor</h1>
      <SnippetEditor snippet={snippet} />
    </div>
  );
};
export default SnippetEdit;
