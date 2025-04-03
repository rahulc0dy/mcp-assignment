// app/test/page.tsx
"use client";

import React, { useState } from "react";

type TestResult = {
  success: boolean;
  message: string;
  data?: unknown;
};

export default function TestPage() {
  const [config, setConfig] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });
      const data: TestResult = await response.json();
      setResult(data);
    } catch (error: unknown) {
      let message = "An error occurred while testing the server.";
      if (error instanceof Error) {
        message = error.message;
      }
      setResult({ success: false, message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="text-primary-text mx-auto mt-24 max-w-7xl bg-zinc-800 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-center text-2xl font-bold">
          MCP Server Tester
        </h1>
        <p className="mb-6 text-center">
          Enter your MCP server configuration (e.g., installation code or
          endpoint URL) to test connectivity and functionality.
        </p>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Enter MCP server configuration"
            value={config}
            onChange={(e) => setConfig(e.target.value)}
            className="text-muted-text mb-4 w-full rounded border p-2"
            required
          />
          <button
            type="submit"
            className="bg-primary-600 w-full cursor-pointer rounded p-2 font-bold"
          >
            {loading ? "Testing..." : "Test Server"}
          </button>
        </form>
        {result && (
          <div
            className={`rounded p-4 ${
              result.success
                ? "text-muted-text bg-green-100"
                : "text-muted-text bg-red-100"
            }`}
          >
            <p className="font-semibold">{result.message}</p>
            {result.data !== undefined && (
              <pre className="bg-secondary-50 mt-2 overflow-auto rounded p-2 text-sm">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            )}
          </div>
        )}
        <div className="text-muted mt-8 border-t pt-4 text-sm">
          <h2 className="mb-2 font-bold">Usage Documentation</h2>
          <p>
            Provide the MCP server configuration (either the full endpoint URL
            or an installation code from a marketplace like{" "}
            <a
              className="text-primary-400 hover:underline"
              href="https://smithery.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Smithery
            </a>
            ). The test will attempt to connect to the MCP server, retrieve its
            list of resources, and display the result.
          </p>
        </div>
      </div>
    </main>
  );
}
