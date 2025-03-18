import { css } from "styled-components";

const sizes = {
  mbl: [0,375],
  tab: [376,700],
  desk: [701,990],
  deskL: [991,1200],
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label][0] / 16}em) and (max-width: ${sizes[label][1] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
