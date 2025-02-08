import NoSnippets from "@/components/NoSnippets";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

import Link from "next/link";

export default async function Home() {
  const snippetsList = await prisma.snippets.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Greetings, </h1>
      <div className="flex items-center justify-between">
        <h1 className="text-xl italic">Access all your saved snippets here</h1>
        <Link href="/snippet/new">
          <Button> New +</Button>
        </Link>
      </div>

      {/* Show NoSnippets only when the list is empty */}
      {snippetsList.length === 0 ? (
        <NoSnippets />
      ) : (
        snippetsList.map((snippet) => (
          <div
            key={snippet.id}
            className="flex items-center justify-between p-2 bg-gray-300 m-2 rounded-lg"
          >
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              <Button variant="link">View</Button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
