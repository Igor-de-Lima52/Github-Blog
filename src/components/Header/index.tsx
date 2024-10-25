import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";
import effect from "../../assets/effect.svg";
import effect2 from "../../assets/effect2.svg";

export function Header(){
  return(
    <HeaderContainer>
      <img src={effect} alt="" />
      <img src={logo} alt="" />
      <img src={effect2} alt="" />
    </HeaderContainer>
  )
}