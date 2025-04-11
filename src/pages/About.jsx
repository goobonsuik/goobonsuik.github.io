/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import media from "../styles/media.jsx";

const Section = styled(S.Section)`
  display: flex;
  justify-content: center;

  // background-color: #fbfbf9;

  font-size: 20px;
  font-weight: 600;

  ${media.tab`
    
  `}

  ${media.mbl`
    margin-bottom: 60px;
    font-size: 18px;
  `}
`;

const Block = styled(S.Block)`
  width: 100%;
  // height: 100vh;
  display: flex;
  // flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  // border: 1px solid #ddd;

  ${media.desk`

  `}
  ${media.tab`
    gap: 60px;
    flex-direction: column;
  `}
  ${media.mbl`
    gap: 60px;
    flex-direction: column;
  `}
`;
const About = () => {
  return (
    <S.Wrap>
      <Section>
        <Block>
          <S.Box>
            <ul>
              <li>1984년생.</li>
              <li>만화애니메이션학과 졸업.</li>
              <li>이러닝 업계에서 애니파트 쭈욱 작업.</li>
              <li>애니메이트(구 플래시), 에프터이펙트, </li>
              <li>포토샵, 일러스트 이용해서 작업.</li>
              <li>현재는 클립스튜디오 툴 적응중. </li>
            </ul>
          </S.Box>

          <S.Box>
            <S.Gif
              $bg={"/images/main.gif"}
              $wid={"400px"}
              $hei={"400px"}
            ></S.Gif>
          </S.Box>
        </Block>
      </Section>

      <Block>
        <S.Gif $bg={"/images/main02.gif"} $wid={"150px"} $hei={"150px"}></S.Gif>
      </Block>
    </S.Wrap>
  );
};

export default About;
