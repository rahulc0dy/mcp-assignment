import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { config } = await request.json();

    // Basic validation of the configuration input.
    if (!config) {
      return NextResponse.json(
        { success: false, message: "Configuration is required." },
        { status: 400 }
      );
    }

    // Construct the test endpoint URL.
    // This example assumes 'config' is a base URL and that the MCP server has a '/status' endpoint.
    // Adjust the URL and logic according to your MCP server specification.
    const testUrl = `${config.replace(/\/+$/, "")}/status`;

    // Make a test request to the MCP server.
    const response = await fetch(testUrl);
    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to connect to MCP server.",
          data: { status: response.status, statusText: response.statusText },
        },
        { status: response.status }
      );
    }

    // Parse the response from the MCP server.
    const data = await response.json();

    return NextResponse.json({
      success: true,
      message: "MCP server is reachable and responded successfully.",
      data,
    });
  } catch (error: unknown) {
    let message = "An error occurred while reaching MCP server.";
    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        message: message,
      },
      { status: 500 }
    );
  }
}
