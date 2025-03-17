/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import S from '../styles/GlobalBlock.jsx';

const Block = styled(S.Block)`
  display: flex;
  justify-content: center;
`

function Main(){
  return (
    <S.Wrap>
      <Block>
        <S.Box>
          <ul>
            {/* <li>1984년생.</li>
            <li>만화애니메이션학과 졸업.</li>
            <li>이러닝 업계에서 애니파트 쭈욱 작업.</li>
            <li>애니메이트(구 플래시), 에프터이펙트, </li>
            <li>포토샵, 일러스트 이용해서 작업.</li>
            <li>현재는 클립스튜디오 툴 적응중. </li> */}
          </ul>
        </S.Box>

        <S.Box>
          <S.Gif></S.Gif>
        </S.Box>
      </Block>

      <Block>
        <S.Gif $wid={'150px'} $hei={'150px'}></S.Gif>
      </Block>
    </S.Wrap>
  )
};

export default Main;