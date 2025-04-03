import { NextResponse } from "next/server";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

// Helper function to validate if a string is a URL.
const isValidUrl = (str: string): boolean => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

export async function POST(request: Request) {
  try {
    const { config } = await request.json();

    if (!config || typeof config !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid configuration provided." },
        { status: 400 }
      );
    }

    // Build the endpoint based on whether the config is a URL or an installation code.
    let endpoint: string;
    if (isValidUrl(config)) {
      // Use the provided URL directly, appending "/sse" if needed.
      endpoint = `${config.replace(/\/+$/, "")}/sse`;
    } else {
      // Assume it's an installation code and map it to a vendor-specific URL.
      // Adjust this mapping as necessary per your vendor's specification.
      endpoint = `https://smithery.ai/server/${config}/sse`;
    }

    // Create an SSE client transport with the constructed endpoint.
    const transport = new SSEClientTransport(new URL(endpoint));

    // Create an MCP client.
    const client = new Client(
      { name: "MCP Tester", version: "1.0.0" },
      { capabilities: { prompts: {}, resources: {}, tools: {} } }
    );

    // Attempt to connect to the MCP server.
    await client.connect(transport);

    // Optionally, perform a simple test such as listing available resources.
    const resources = await client.listResources();

    return NextResponse.json({
      success: true,
      message: "MCP server is reachable and functioning.",
      data: resources,
    });
  } catch (error: unknown) {
    let message = "An unexpected error occurred while testing the MCP server.";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
