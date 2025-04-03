"use client";

import { FormEvent, useState } from "react";

interface Result {
  success: boolean;
  data?: any;
  error?: string;
}

export default function Home() {
  const [serverUrl, setServerUrl] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/test-mcp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serverUrl }),
      });
      const data: Result = await res.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-6 pt-20">
      <div className="w-full max-w-md rounded-lg p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">
          MCP Server Tester
        </h1>
        <p className="text-secondary-600 mb-6 text-center">
          Enter the MCP server URL below to test its connectivity.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="serverUrl"
              className="text-secondary-700 mb-2 block"
            >
              MCP Server URL:
            </label>
            <input
              type="url"
              id="serverUrl"
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
              placeholder="https://example.com/api/mcp"
              required
              className="border-secondary-300 focus:ring-primary-500 w-full rounded-lg border p-3 focus:ring-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-500 text-primary-text hover:bg-primary-600 w-full rounded-lg py-3 transition-colors disabled:opacity-50"
          >
            {loading ? "Testing..." : "Test Server"}
          </button>
        </form>
        {result && (
          <div className="bg-secondary-100 mt-6 rounded-lg p-4">
            <h2 className="mb-2 text-lg font-semibold">Result:</h2>
            <pre className="text-secondary-800 overflow-x-auto text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
