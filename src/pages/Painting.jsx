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
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setImgUrl(data.painting[index].url);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % data.painting.length;
      setImgUrl(data.painting[nextIndex].url);
      return nextIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted = (prevIndex - 1 + data.painting.length) % data.painting.length;
      setImgUrl(data.painting[prevIndexAdjusted].url);
      return prevIndexAdjusted;
    });
  };

  return (
    <S.Wrap>
      <Modal
        isModalOpen={isModalOpen}
        src={imgUrl}
        onClose={closeModal}
        onNext={goToNext}
        onPrev={goToPrev}
      />
      <S.GridWrap $gridColumns={"repeat(auto-fill, minmax(300px, auto))"}>
        {data.painting.map((item, idx) => (
          <GridItem
            key={idx}
            $img={item.url}
            onClick={() => openModal(idx)}
          ></GridItem>
        ))}
      </S.GridWrap>
    </S.Wrap>
  );
}

export default Painting;
