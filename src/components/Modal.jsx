import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "/public/data/data.json";
import S from "../styles/GlobalBlock.jsx";

const ModalWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden; /* 스크롤 바 제거 */
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: 30px;
  overflow: hidden; /* 스크롤바 제거 */

  > button {
    border: none;
    width: 50px;
    height: 50px;
    flex-shrink: 0; /* 버튼 크기 고정 */
  }

  > img {
    // width: 100%;
    // height: 100%;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};

    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    flex-grow: 1; /* 이미지가 남은 공간을 채우도록 설정 */
    flex-shrink: 0; /* 이미지 크기 고정 */
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: transparent;
  background-image: url("/images/arrow.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  filter: ${(props) => props.color || "none"};
`;

const TopBtnWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  border: 1px solid #fff;

  .count {
    display: flex;
  }

  p {
    color: #fff;
  }
`;

const Modal = ({ isModalOpen, src, onClose, onNext, onPrev }) => {
  const [imageSize, setImageSize] = useState({ width: "80%", height: "80%" });
  const buttonColor =
    "invert(34%) sepia(92%) saturate(500%) hue-rotate(200deg) brightness(90%) contrast(85%)";
  const [nowCount, setNowCount] = useState(0);
  const [allCount, setAllCount] = useState(0);

  const counting = (e) => {
    setAllCount(data.painting.length);
    setNowCount(data.painting.findIndex((item) => item.url === src) + 1);
  };

  const ogSize = () => {
    setImageSize({ width: "100%", height: "100%" });
  };

  const zoom = (type) => {
    if (type === "in") {
      setImageSize({ width: "90%", height: "90%" });
    } else if (type === "out") {
      setImageSize({ width: "80%", height: "80%" });
    }
  };

  useEffect(() => {
    counting();
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  useEffect(() => {
    counting();
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const maxWidth = window.innerWidth * 0.8; // 화면 너비의 80%
        const maxHeight = window.innerHeight * 0.8; // 화면 높이의 80%
        let width = img.naturalWidth;
        let height = img.naturalHeight;

        // 이미지 크기가 최대 크기를 초과하면 비율에 맞게 조정
        if (width > maxWidth || height > maxHeight) {
          const widthRatio = maxWidth / width;
          const heightRatio = maxHeight / height;
          const ratio = Math.min(widthRatio, heightRatio);
          width *= ratio;
          height *= ratio;
        }

        setImageSize({ width: `${width}px`, height: `${height}px` });
      };
    }
  }, [src]);

  if (!isModalOpen) return null;

  return (
    <ModalWrap onClick={onClose}>
      <TopBtnWrap>
        <div className="count">
          <p>{nowCount}</p>/<p>{allCount}</p>
        </div>

        <div className="icon">
          <div className="showOgSize" onClick={ogSize}></div>
          <div className="zoomIn" onClick={() => zoom("in")}></div>
          <div className="zoomOut" onClick={() => zoom("out")}></div>
          <div className="close" onClick={onClose}></div>
        </div>
      </TopBtnWrap>
      <Content
        onClick={(e) => e.stopPropagation()}
        // width={imageSize.width || "80%"}
        // height={imageSize.height || "80%"}
      >
        <Button
          onClick={onPrev}
          style={{ transform: "rotate(180deg)" }}
          color={buttonColor}
        />
        <Img
          width={imageSize.width || "80%"}
          height={imageSize.height || "80%"}
        >
          <img src={src} alt="Modal 이미지" />
        </Img>

        <Button onClick={onNext} color={buttonColor} />
      </Content>
    </ModalWrap>
  );
};

export default Modal;
