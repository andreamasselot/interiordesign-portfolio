import { Link } from "react-router-dom";
import { SNav } from "./styled";

export const TopBar = () => {
  return (
    <SNav>
      <Link to="/concepts">CONCEPTS</Link>
      <Link to="/services">SERVICES</Link>
      <Link to="/aboutme">ABOUT ME</Link>
      <Link to="/contact">CONTACT</Link>
    </SNav>
  )
};