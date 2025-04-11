import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
// import ReactPlayer from 'react-player'
import ReactPlayer from "react-player/vimeo";
// import ReactPlayer from 'react-player/lazy'
// import Vimeo from "@u-wave/react-vimeo";
import data from "/public/data/data.json";

import styled from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import media from "../styles/media.jsx";

const GridWrap = styled(S.GridWrap)`
  gap: 50px 10px;
  ${media.mbl`
    gap: 30px 10px;
  `}
`;
const GridItem = styled(S.GridItem)`
  // width: 510px;
  // height: 288px;
  // border: 1px solid #ddd;

  .react-player {
    width: 100% !important;
    height: 100% !important;
  }

  ${media.desk`
    // border:3px solid #f00;
  `}
  ${media.tab`
    // border:3px solid #0f0;
  `}
  ${media.mbl`
    // border:3px solid #00f;
  `}
`;

function Project() {
  return (
    <S.Wrap>
      <GridWrap>
        {data.project.map((item, idx) => {
          return (
            <GridItem key={idx}>
              <ReactPlayer
                className="react-player"
                url={"https://vimeo.com/" + item.url}
                light={true}
                volume="0.1"
              />
            </GridItem>
          );
        })}
      </GridWrap>
    </S.Wrap>
  );
}

export default Project;
