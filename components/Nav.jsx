import { useSelector } from "react-redux";
const Nav = () => {
  const { current_lang } = useSelector((store) => store.translate);
  return <div>{current_lang}</div>;
};
export default Nav;
