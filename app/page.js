"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import Header from "@/layout/Header";
const page = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default page;
