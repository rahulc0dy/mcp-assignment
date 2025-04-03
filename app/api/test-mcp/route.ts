import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { serverUrl } = await request.json();
  try {
    const res = await fetch(serverUrl);
    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Server returned an error" },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
