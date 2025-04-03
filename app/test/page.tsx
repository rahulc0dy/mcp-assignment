// app/page.tsx
"use client";

import React, { useState } from "react";

type TestResult = {
  success: boolean;
  message: string;
  data?: any;
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
    } catch (error: any) {
      setResult({ success: false, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={"mx-auto mt-24 max-w-7xl bg-zinc-800"}>
      <div className="mx-auto max-w-2xl p-8">
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
            className="mb-4 w-full rounded border p-2"
            required
          />
          <button
            type="submit"
            className="bg-primary-500 text-secondary-text block w-full rounded p-2 font-mono font-bold"
          >
            {loading ? "Testing..." : "Test Server"}
          </button>
        </form>
        {result && (
          <div
            className={`rounded p-4 ${result.success ? "bg-accent-100" : "bg-danger-100"}`}
          >
            <p className="font-semibold">{result.message}</p>
            {result.data && (
              <pre className="mt-2 overflow-auto rounded bg-gray-50 p-2 text-sm">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            )}
          </div>
        )}
        <div className="text-muted-text mt-8 border-t pt-4 text-sm">
          <h2 className="mb-2 font-bold">Usage Documentation</h2>
          <p>
            Provide the MCP server configuration (e.g., the endpoint URL or
            installation code from a marketplace like{" "}
            <a
              className="text-primary-600 hover:underline"
              href="https://smithery.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Smithery
            </a>
            ). The test will send a request to verify connectivity and the
            expected functionality of the MCP server. If successful, you'll see
            a confirmation message along with additional details.
          </p>
        </div>
      </div>
    </main>
  );
}
