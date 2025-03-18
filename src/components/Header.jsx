import React, { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import data from "/public/data/data.json";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const HeaderWrap = styled(S.Wrap)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1230px;
  padding: 0 30px;
  margin-top: 20px;
`;

const Logo = styled.div`
  width: 88px;
  height: 88px;
  background-image: url("/images/logo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
`;

// const NavContainer = styled.div`
//   display: flex;
//   align-content: center;
//   gap: 20px;
// `;

const NavItem = styled.div``;


function Header() {
  const navigate = useNavigate();

  const [isHover, setHover] = useState(0);
  const [navHover, setNavHover] = useState(data.nav.map(() => true));

  const navMouseEvt = (idx) => {
    const newHover = [...navHover];
    newHover[idx] = !newHover[idx];
    setNavHover(newHover);
  };

  return (
    <S.HeaderWrap>
      <S.Inner>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        ></Logo>

        <S.NavContainer>
          <NavItem
            onClick={() => {
              navigate("/");
            }}
          >
            About
          </NavItem>
          <NavItem
            onClick={() => {
              navigate("/work");
            }}
          >
            Work
          </NavItem>
        </S.NavContainer>
      </S.Inner>
    </S.HeaderWrap>
  );
}

export default Header;
