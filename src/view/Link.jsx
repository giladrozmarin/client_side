import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => 
{
 
return(
 
  <Nav>
    <li>
      <StyledLink  to="/" >getAllUsers</StyledLink>
    </li>
    <li>
      <StyledLink  to="/getUserById" >getUserById</StyledLink>
    </li>
    <li>
      <StyledLink to="/CreateUser" >CreateUser</StyledLink>
    </li>
    <li>
      <StyledLink to="/updateUser" >UpdateUser</StyledLink>
    </li>
    <li>
      <StyledLink to="/DeleteUser" >DeleteUser</StyledLink>
    </li>
  </Nav>
);}

export default Links;

const StyledLink = styled(Link)`
  color: mintcream;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 1.8rem;
  width: 50rem;
  justify-content: space-between;
`;
