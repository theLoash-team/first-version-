import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }
  try {
    const { email, password } = req.body;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return NextResponse.json({
      message: "User signed in successfully",
      user: userCredential.user,
    });
  } catch (err) {
    console.log(`error sign in user : ${err}`);
    return res.status.send(404, "error ");
  }
}
