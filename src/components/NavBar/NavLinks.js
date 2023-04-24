import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer =  styled.div`
  height:100%;
  display:flex;
  align-items:center;
`;

const LinksWrapper = styled.ul`
  margin:0;
  padding:0;
  display:flex;
  
  list-style:none;
 
`;

const LinkItem = styled.li`
  height:100%;
  padding: 0 1.1em;
  font-weight:500;
  font-size:14px;
  font-family: grotesque-bold;
  border-top: 2px solid transparent;

  & a{
    color:white;

  }

  a:hover{
    border-bottom:solid 5px blue;
    transition:ease .15s;

  }

`;

export default function NavLinks(props){
 return <NavLinksContainer>
    <LinksWrapper>
      <LinkItem><Link to="/">Home</Link></LinkItem>
      <LinkItem><Link to="/favourites">Favourites</Link></LinkItem>
      <LinkItem><Link to="/about">About</Link></LinkItem>
    </LinksWrapper>
  </NavLinksContainer>
}