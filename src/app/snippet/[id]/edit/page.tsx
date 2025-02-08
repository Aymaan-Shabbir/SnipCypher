import SnippetEditor from "@/components/MonacoEditor";
import { prisma } from "@/lib/prisma";

const SnippetEdit = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>Snippet not found</h1>;

  return <SnippetEditor snippet={snippet} />;
};

export default SnippetEdit;
