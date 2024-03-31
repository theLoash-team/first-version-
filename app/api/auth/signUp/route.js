import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  try {
    const { email, password } = req.body;
    console.log(email, password);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    return NextResponse.json({
      message: "User signed up successfully ",
      data: userCredential.user,
    });
  } catch (error) {
    console.log("Error creating user : ", error.message);
    return NextResponse.json({ message: "Server Error" });
  }
}
