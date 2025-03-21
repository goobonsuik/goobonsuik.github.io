import React, { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import data from "/public/data/data.json";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

import Top from "/public/images/top-icon.svg?react";

const TopBtn = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  align-content: center;
`;

function Footer() {
  const navigate = useNavigate();

  const [isHover, setHover] = useState(0);
  const [navHover, setNavHover] = useState(data.nav.map(() => true));

  const navMouseEvt = (idx) => {
    const newHover = [...navHover];
    newHover[idx] = !newHover[idx];
    setNavHover(newHover);
  };

  const onMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.Wrap>
      <S.Inner>
        <S.FlexBox>
          <p>Follow me :</p>
          <span>instagram</span>
        </S.FlexBox>
        <TopBtn onClick={onMoveToTop}>
          <Top width="50px" height="50px" />
        </TopBtn>
      </S.Inner>
    </S.Wrap>
  );
}

export default Footer;
