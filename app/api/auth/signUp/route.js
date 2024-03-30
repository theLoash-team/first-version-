import { NextRequest, NextResponse } from "next/server";
import { admin, auth } from "@/firebase/firebaseAdmin";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(req, res) {
  if (!req.method == "POST") {
    return NextResponse.json({ message: "Method Not Allowed" });
  }

  try {
    const user = req.body;
    // const resp = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(resp);
    return NextResponse.json({
      message: "User signed up successfully ",
      user,
    });
  } catch (error) {
    console.log("error mother fucker");
    // console.log("Error creating user : ", error.message);
    return NextResponse.json({ message: "Server Error" });
  }
}
