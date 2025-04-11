/* eslint-disable */
import styled from "styled-components";
import media from "./media.jsx";

const Container = styled.div`
  margin: 0 auto;
  padding: 120px 30px 0px;
  max-width: 1230px;
  background-color: #ddd;
  background-color: #fbfbf9;

  ${media.desk`
    padding: 120px 80px 0;
    color: pink;
  `}
  ${media.tab`
    color: red;
  `}
  ${media.mbl`
    color: blue;
  `}
`;

const Wrap = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const Section = styled.section`
  ${media.tab`
    margin-top: 60px;
  `}
  ${media.mbl`
    margin-top: 60px;
  `}
`;

const Block = styled.div`
  display: flex;
`;
const Box = styled.div``;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$gridColumns || "repeat(2, 1fr)"};
  grid-auto-rows: minmax(300px, auto);

  gap: ${(props) => props.$gap || "20px"};
  justify-items: center;
  
  ${media.tab`
    grid-template-columns: ${(props) => props.$gridColumns || "1fr"};
  `}
  ${media.mbl`
    grid-template-columns: ${(props) => props.$gridColumns || "1fr"};
  `}

`;

const GridItem = styled.div`
  width: 100%;
  min-height: 170px;
`;

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1230px;
  width: 100%;
  padding: 0 30px;
  margin-top: 20px;

  ${media.desk`
  `}
  ${media.tab`
  `}
  ${media.mbl`
  `}
`;

const Gif = styled.div`
  width: ${(props) => props.$wid || "300px"};
  height: ${(props) => props.$hei || "300px"};
  background-color: #fff;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Img = styled.div`
  width: ${(props) => props.$wid || "300px"};
  height: ${(props) => props.$hei || "300px"};
  background-image: url(${(props) => props.$bg || "none"});
  background-color: #fff;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const FlexBox = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;

const S = {
  Container,
  Wrap,
  Inner,
  Section,
  Block,
  Box,
  GridWrap,
  GridItem,
  HeaderWrap,
  Gif,
  Img,
  FlexBox,
  NavContainer,
};

export default S;
