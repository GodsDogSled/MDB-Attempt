import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer =  styled.div`
  height:fit-content;
  display:flex;
  
`;

const LinksWrapper = styled.ul`
  margin:0;
  padding:0;
  display:flex;
  list-style:none;
  align-items:center;
  justify-content:center;
  gap:30px;
`;

const LinkItem = styled.li`
  height:fit-content;
  width:100%;
  padding: 0 1.1em;
  font-size:15px;
  font-family: grotesque-bold;
  border-top: 2px solid transparent;
  
  & a{
    color:white;
    display:inline-block;
    position:relative;
    transition: 0.5s ease-out;
    text-decoration:none;
    
    &::after{
      position:absolute;
      left:-15px;
      bottom:4.5px;
      content:"";
      width:40px;
      height:5px;
      background-color:blue;
      visibility: hidden;
      opacity: 0;
      transition:  opacity 0.5s ease-out;
    }
  }

 

  a:hover{
    &::after{
      visibility: visible;
      opacity: 1;
    }
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