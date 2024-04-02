import { NextResponse } from "next/server";
import { auth } from "firebase-admin";
import { signOut } from "firebase/auth";
export async function handler(req, res) {
  try {
    const response = signOut(auth);
    return NextResponse.json({
      message: "user logged out sucessfully",
    });
  } catch (error) {
    console.log(`error logging out user ${error}`);
    return NextResponse.json({
      message: "error logging out User",
    });
  }
}
