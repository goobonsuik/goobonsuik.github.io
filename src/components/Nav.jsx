import React, { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import data from "/public/data/data.json";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const Icon = styled.div`
  width: 260px;
  height: 260px;
  border: 1px solid #ddd;
  background-size: cover;
  background-repeat: no-repeat;
`;

const NavContainer = styled.ul``;
const NavItem = styled.li`
  margin-bottom: 50px;
`;

const Insta = styled.p`
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  align-content: center;
  align-item: center;
  text-align: center;
`;

function Nav() {
  const navigate = useNavigate();

  const [isHover, setHover] = useState(0);
  const [navHover, setNavHover] = useState(data.nav.map(() => true));

  const navMouseEvt = (idx) => {
    const newHover = [...navHover];
    newHover[idx] = !newHover[idx];
    setNavHover(newHover);
  };

  return (
    <S.Wrap>
      <Icon onClick={() => navigate("/")}></Icon>

      <NavContainer>
        {data.nav.map((item, idx) => {
          return (
            <NavItem
              key={idx}
              onClick={() => navigate(item.link)}
              onMouseOver={() => navMouseEvt(idx)}
              onMouseOut={() => navMouseEvt(idx)}
              className={
                navHover[idx] ? "colorPickerVisible" : "colorPickerInvisible"
              }
            >
              {navHover[idx] ? item.name : item.cName}
            </NavItem>
          );
        })}
      </NavContainer>

      <div>
        <p>
          E-mail. <span>naguchu@naver.com</span>
        </p>
        <p>
          Addr. <span>Gyeonggi, Korea</span>
        </p>
        <Insta></Insta>
      </div>
    </S.Wrap>
  );
}

export default Nav;
