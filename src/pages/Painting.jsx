import React, { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import data from "/public/data/data.json";

const GridItem = styled(S.GridItem)`
  min-height: 400px;
  background-image: ${(props) => props.$img};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function Painting() {
  return (
    <S.Wrap>
      <S.GridWrap $gridColumns={"repeat(auto-fill, minmax(300px, auto))"}>
        {data.painting.map((item, idx) => {
          return <GridItem key={idx} $img={item.url}></GridItem>;
        })}
      </S.GridWrap>
    </S.Wrap>
  );
}

export default Painting;
