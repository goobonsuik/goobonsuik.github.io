/* eslint-disable */
import styled from "styled-components";
import media from "./media.jsx";

const Container = styled.div`
  margin: 0 auto;
  padding: 120px 30px 0px;
  max-width: 1230px;
  background-color: #ddd;
  background-color: #fbfbf9;

  ${media.mbl`
    color: red;
  `}
  ${media.tab`
    color: blue;
  `}
  ${media.desk`
    color: purple;
    padding: 120px 80px 0;
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
  // min-height: ${(props) => props.$hei || "100vh"};
`;

const Block = styled.div`
  display: flex;
`;
const Box = styled.div`
  // border: 1px solid #ddd;
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$gridColumns || "repeat(2, minmax(428px, auto))"};
  gap: ${(props) => props.$gap || "20px"};
  justify-items: center;
`;

const GridItem = styled.div`
  // border: 1px solid #ddd;
  // width: 100px; height: 100px;
  width: 100%;
`;

const Gif = styled.div`
  width: ${(props) => props.$wid || "300px"};
  height: ${(props) => props.$hei || "300px"};
  background-image: url(${(props) => props.$bg});

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  // border: 1px solid #ddd;
`;

const FlexBox = styled.div`
  display: flex;
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
  Gif,
  FlexBox,
};

export default S;
