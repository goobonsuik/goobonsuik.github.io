import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import S from "../styles/GlobalBlock.jsx";

const ModalWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 999;

  background-color: rgba(0, 0, 0, 0.6);

  h2 {
    border-bottom: 2px solid pink;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  h3 {
  }

  content {
    div {
      display: flex;

      > p {
        font-weight: bold;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width || "80%"}; /* 동적 너비 */
  height: ${(props) => props.height || "80%"}; /* 동적 높이 */
  max-width: 80%;
  max-height: 80%;

  padding: 30px;

  overflow-y: scroll;

  > div {
    display: flex;

    > p {
      margin-right: 10px;
      font-weight: bold;
      flex-shrink: 0;
    }
  }

  > button {
    border: none;
    width: 50px;
    height: 50px;
  }
`;

const Img = styled(S.Img)`
  width: 100%;
  height: 100%;
`;

const Modal = ({ modalProps: { imgUrl, isModalOpen, setIsModalOpen } }) => {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  const [isImgUrl, setIsImgUrl] = useState(imgUrl);


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeImage  = (direction) => {
    const currentNumber = parseInt(imgUrl.match(/(\d+)\.jpg$/)[1], 10);

    // 방향에 따라 번호 계산
    const newNumber = direction === "next" ? currentNumber + 1 : currentNumber - 1;

    // 새로운 이미지 URL 생성 (번호는 4자리로 유지)
    const newImgUrl = `/images/painting/${String(newNumber).padStart(4, "0")}.jpg`;

    setIsImgUrl(newImgUrl);

  };

  

  useEffect(()=>{
    const imgLoad = () => {
      const img = new Image();
      img.src = imgUrl;
      img.onload = () =>
        setImgDimensions({ width: img.width, height: img.height });
    };

    imgLoad();
  },[isImgUrl]);


  useEffect(() => {
    
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <>
      {isModalOpen && (
        <ModalWrap className="modal-wrap" onClick={closeModal}>
          <Content
            className="content"
            onClick={(e) => e.stopPropagation()}
            width={`${imgDimensions.width}px`}
            height={`${imgDimensions.height}px`}
          >
            <button
              onClick={() => {
                changeImage("prev");
              }}
            >
              prev
            </button>
            <Img $bg={isImgUrl} alt="modal content"></Img>
            <button
              onClick={() => {
                changeImage("next");
              }}
            >
              next
            </button>
          </Content>
        </ModalWrap>
      )}
    </>
  );
};

export default Modal;
