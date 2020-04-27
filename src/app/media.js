import { css } from "styled-components";
const sizes = {
  label1300: 1300,
  label0: 0,
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
