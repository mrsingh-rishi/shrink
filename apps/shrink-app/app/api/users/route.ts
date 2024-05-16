import { NextRequest, NextResponse } from "next/server";
import { handleGoogleLogin } from "../../../actions/saveUserToDb";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const res = await handleGoogleLogin(body.token);

    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
