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

  // background-color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.9);

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

  overflow-y: hidden;

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

const Modal = ({ isModalOpen, src, onClose, onNext, onPrev }) => {
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
        <ModalWrap className="modal-wrap" onClick={onClose}>
          <Content className="content" onClick={(e) => e.stopPropagation()}>
            <button onClick={onPrev}>prev</button>
            <img src={src} alt="Modal 이미지" style={{ width: "300px" }} />
            <button onClick={onNext}>next</button>
          </Content>
        </ModalWrap>
      )}
    </>
  );
};

export default Modal;
