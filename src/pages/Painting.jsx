import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";
import data from "/public/data/data.json";

import Modal from "../components/Modal.jsx";

const GridItem = styled(S.GridItem)`
  min-height: 400px;
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function Painting() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState('');

  const openModal = (url) => {
    setImgUrl(url);
    setIsModalOpen(!isModalOpen);

    console.log(imgUrl);
    
  };
  return (
    <S.Wrap>
      <Modal
        modalProps={{
          imgUrl,
          isModalOpen,
          setIsModalOpen,
        }}
      />

      <S.GridWrap $gridColumns={"repeat(auto-fill, minmax(300px, auto))"}>
        {data.painting.map((item, idx) => {
          return (
            <GridItem key={idx} $img={item.url} onClick={()=>{openModal(item.url)}}></GridItem>
          );
        })}
      </S.GridWrap>
    </S.Wrap>
  );
}

export default Painting;
