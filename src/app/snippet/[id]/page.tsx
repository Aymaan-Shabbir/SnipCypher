import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { DeleteSnippet } from "@/actions/delete";
import { notFound } from "next/navigation";

type SnippetDetailProps = {
  params: Promise<{ id: string }>;
};

const SnippetView: React.FC<SnippetDetailProps> = async ({ params }) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippets.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) notFound();
  const DeleteSnippetAction = DeleteSnippet.bind(null, snippet.id);

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl font-bold ">{snippet?.title}</h1>
        <div className="flex gap-3">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={DeleteSnippetAction}>
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
      <div className="my-2">
        <pre className="p-1 bg-gray-200 rounded border-gray-200">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </>
  );
};

export default SnippetView;

// turning dynamic route to static
export const generateStaticParams = async () => {
  const snippets = await prisma.snippets.findMany();

  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
};
