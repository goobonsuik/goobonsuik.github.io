import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import data from "/public/data/data.json";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import Project from "./Project.jsx";
import Painting from "./Painting.jsx";

const GridItem = styled(S.GridItem)`
  width: 428px;
  border: 1px solid #ddd;
`;

const Work = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Section>
        <S.Block>
          <S.Box>
            작업에 썼던 bg와 더빙들은 혹여나 저작권으로 인해서 유튜브 무료 bg로
            <br />
            영상속도는 전반적으로 조금 빠르게 해서 편집되었어요~
          </S.Box>
          <S.Gif $wid={"200px"} $hei={"200px"}></S.Gif>
        </S.Block>
      </S.Section>
      <S.Box>
        <ul>
          <li
            onClick={() => {
              navigate("/project");
            }}
          >
            project
          </li>
          <li
            onClick={() => {
              navigate("/painting");
            }}
          >
            painting
          </li>
        </ul>
      </S.Box>

      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="painting" element={<Painting />} />
      </Routes>
    </>
  );
};

export default Work;
