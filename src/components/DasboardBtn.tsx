"use client";

import { SparklesIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function DasboardBtn() {
  const isCandidate = false;
  const isInterviewer = true;

  if (isCandidate) return null;
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <SparklesIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}

export default DasboardBtn;
