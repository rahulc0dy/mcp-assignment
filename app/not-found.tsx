import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div
      className={"flex min-h-screen flex-col items-center justify-center gap-5"}
    >
      <h1 className={"font-mono text-4xl font-black md:text-7xl"}>404</h1>
      <h2 className={"text-secondary-text font-mono text-xl font-medium"}>
        Page not found
      </h2>
      <Link href={"/"} className={"text-muted-text text-sm"}>
        <ArrowLeftIcon className={"inline-flex size-4"} /> Return Home
      </Link>
    </div>
  );
};
export default NotFound;
