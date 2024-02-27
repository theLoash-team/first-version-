"use client";
import { toggling } from "@/reducers/translate";
import { useDispatch } from "react-redux";
const LanguageToggling = () => {
  const dispatch = useDispatch();
  const handleToggling = (event) => {
    dispatch(toggling({ newLang: event.target.value }));
  };
  return (
    <div>
      <select
        className="select select-ghost select-xs"
        onChange={handleToggling}
        defaultValue="en-us"
      >
        <option selected>en-us</option>
        <option>fr</option>
      </select>
    </div>
  );
};
export default LanguageToggling;
