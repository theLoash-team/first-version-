import { NextResponse } from "next/server";
import { collection, doc, getDoc, getDocs, docs } from "firebase/firestore";
import { db } from "../../../../firebase/config";

export async function GET(request, context) {
  const { params } = context;
  const docRef = doc(db, "translations", params.lang);
  const docSnap = await getDoc(docRef);
  return NextResponse.json(docSnap.data());
}
