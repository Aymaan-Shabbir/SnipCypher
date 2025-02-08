"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-rose-500 text-white shadow-md gap-1">
      <Link href="/">
        <h1 className="text-lg font-bold cursor-pointer">
          <span className="text-black">Snip</span>Cypher.
        </h1>
      </Link>
      <div className="flex items-center justify-between gap-2 " >
        <Link href="https://github.com/Aymaan-Shabbir/SnipCypher">
          <Button className="bg-black hover:bg-gray-800 ">
            <Github className="w-6 h-6 text-white hover:text-gray-400 cursor-pointer" />
          </Button>
        </Link>
        <Link href="/snippet/new">
          <Button className="bg-blue-500 hover:bg-blue-600" >Create</Button>
        </Link>
        <Link href="/">
          <Button className="bg-gray-700 hover:bg-gray-800">Snippets</Button>
        </Link>
      </div>
    </nav>
  );
}
