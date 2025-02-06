"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">🚀 SnippetApp</h1>
      </Link>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <Link href="/snippet/new">
          <Button className="bg-blue-500 hover:bg-blue-600">Create</Button>
        </Link>
        <Link href="/snippets">
          <Button className="bg-gray-700 hover:bg-gray-800">Snippets</Button>
        </Link>
      </div>
    </nav>
  );
}
