/* eslint-disable */
import { createGlobalStyle } from "styled-components";
import OutfitMedium from '../fonts/Outfit-Medium.woff2';
import OutfitLight from '../fonts/Outfit-Light.woff2';
import Assistant from '../fonts/Assistant-Regular.woff2';
import NotoSans from '../fonts/NotoSansKR-Light.woff2';
import NotoSansRegular from '../fonts/NotoSansKR-Regular.woff2';
import NotoSansMedium from '../fonts/NotoSansKR-Medium.woff2';

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }

  body {
    position: relative;
    font-family: 'Inter', 'OutfitLight', 'NotoSans';
  }

  @font-face {
    font-family: 'OutfitLight';
    src: local('OutfitLight'), local('OutfitLight');
    font-style: normal;
    src: url(${OutfitLight}) format('woff2');
  }
  @font-face {
    font-family: 'Outfit';
    src: local('OutfitMedium'), local('OutfitMedium');
    font-style: normal;
    src: url(${OutfitMedium}) format('woff2');
  }
  @font-face {
    font-family: 'Assistant';
    src: local('Assistant'), local('Assistant');
    font-style: normal;
    src: url(${Assistant}) format('woff');
  }
  @font-face {
    font-family: 'NotoSans';
    src: local('NotoSans'), local('NotoSans');
    font-style: normal;
    src: url(${NotoSans}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansRegular';
    src: local('NotoSansRegular'), local('NotoSansRegular');
    font-style: normal;
    src: url(${NotoSansRegular}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansMedium';
    src: local('NotoSansMedium'), local('NotoSansMedium');
    font-style: normal;
    src: url(${NotoSansMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 300;
    src: url('/fonts/Inter-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    src: url('/fonts/Inter-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    src: url('/fonts/Inter-Medium.woff2') format('woff2');
  }
`;

export default GlobalStyles;