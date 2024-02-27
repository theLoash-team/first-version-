"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import Nav from "@/components/Nav";
const page = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};
export default page;
