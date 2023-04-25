import React from "react";
import styled from "styled-components"
import Logo  from "../logo/index.js";
import NavLinks from "./NavLinks";
import DesktopSearch from "./DesktopSearch.js";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";


const NavBarContainer = styled.div`
    position:sticky;
    background-color:black;
    top:0;
    z-index:999;
    padding-left: 15px;
    padding-right: 15px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:0;
    margin-top:0;
    padding-top:30px;
    padding-bottom:26px;
`;

const LeftSection = styled.div`
  display: flex;
  height:100%;
  position:relative;
  width:100px;
  top:12px;
`;
const MiddleSection = styled.div`
  display: flex;
  height:100%;
  align-items:center;
`;
const RightSection = styled.div`
  display:flex;
  height:100%;
  justify-content:center;
`;

const DesktopSearchContainer =  styled.div`
  
  border-radius:10px 10px 10px 10px;
  padding:.5rem;
  height:25px;
  width:25px;
  align-self:center;

  svg{
    fill:white;
    stroke:white;
    stroke-width:.5px;
    transition: transform .2s;
  }

  &::after{
    content:"";
    transition: transform .4s;
    display: inline-block;
    width:16px !important;
    height:16px;
    background-color:blue;
    position:absolute;
    top:37px;
    right:7px;
    z-index:-10;
  }

  &:hover{
    svg{
      transform: scale(1.1);
      fill:white;
      scale:2:
    }

    &::after{
      transform:rotate(45deg);

    }
  }
`

export default function NavBar(props) {

  const isMobile = useMediaQuery({
    query: '(max-width: 700px)'
  })

  return <NavBarContainer >
    <LeftSection>
      <Link to= "/" ><Logo /></Link>
    </LeftSection>
    <MiddleSection>
      {!isMobile &&  <NavLinks />}
    </MiddleSection>
    <RightSection>
      {isMobile && <MobileNav />}
      {!isMobile && <DesktopSearchContainer><DesktopSearch/></DesktopSearchContainer>}
    </RightSection>
  </NavBarContainer>
}