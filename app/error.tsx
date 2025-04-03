"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { RefreshCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      className={
        "flex min-h-screen w-full flex-col items-center justify-center gap-5"
      }
    >
      <h2 className={"text-2xl font-bold md:text-5xl"}>
        Something went wrong!
      </h2>
      <p className={"text-secondary-text text-lg"}>
        We are already on it! Please try again later.
      </p>
      <button
        className="button from-primary-900 to-secondary-900 hover:bg-secondary-900/75 text-background-50 relative z-10 mt-4 inline-flex h-14 max-w-sm cursor-pointer items-center justify-center gap-1.5 rounded-md bg-gradient-to-br px-5 py-2.5 font-semibold shadow-xl transition hover:scale-[0.98] active:scale-[0.95]"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <RefreshCcw />
        Try again
      </button>
    </div>
  );
}
