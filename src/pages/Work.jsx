import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const Section = styled(S.Section)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;
`;

const Block = styled(S.Block)`
  justify-content: center;
  gap: 20px;
  align-items: center;

  margin-bottom: 30px;

  min-height: 80px;

  font-size: 20px;
`;

const Work = () => {
  const navigate = useNavigate();

  return (
    <>
      <Section $hei={'50vh'}>
        <Block>
          <S.Box>
            작업에 썼던 bg와 더빙들은 혹여나 저작권으로 인해서 <br />
            유튜브 무료 bg로 영상속도는 전반적으로 <br/>
            조금 빠르게 편집되었어요~
          </S.Box>
          <S.Gif
            $wid={"200px"}
            $hei={"200px"}
            $bg={"/images/main02.gif"}
          ></S.Gif>
        </Block>
      </Section>

      <Block>
        <S.Box
          onClick={() => {
            navigate("/work");
          }}
        >
          project
        </S.Box>
        <S.Box
          onClick={() => {
            navigate("/work/painting");
          }}
        >
          painting
        </S.Box>
      </Block>

      <S.Section>
        <Outlet></Outlet>
      </S.Section>
    </>
  );
};

export default Work;
