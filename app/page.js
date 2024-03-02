"use client";
import { collection, doc, getDoc, getDocs, docs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState, useEffect } from "react";
import { AmpContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

const page = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const docRef = doc(db, "translations", "en");
        const docSnap = await getDoc(docRef);
        setContent(docSnap.data());
        // console.log(content);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslations();
  });
  return (
    <div>
      {content ? (
        <>
          <h1>This page is in english</h1>
          <h1> {content.about} </h1>
          <h1> {content.home} </h1>
          <h3>{content.product}</h3>
          <p>{content.desc}</p>
          <p>{content.buy}</p>
        </>
      ) : (
        <p>there s no data</p>
      )}
    </div>
  );
};
export default page;
