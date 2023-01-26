import styled, { css, keyframes } from "styled-components";

const SlideUp = keyframes` 
  0% {
    transform: translate( 0, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity:1;
  }
`;

export const Logo = styled.div<{ click: boolean }>`
  font-size: 2.8rem;
  color: #252525;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  color: ${(props) => props.color};
  z-index: 3;
  ${(props) =>
    props.click &&
    css`
      color: white;
    `}
`;
export const HeaderContainer = styled.div<{ scroll: boolean }>`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.3s;
  ${(props) =>
    props.scroll &&
    css`
      /* backdrop-filter: blur(135px); */
      background-color: rgba(255, 255, 255, 0.8);
    `}
  max-height: 20vh;
  padding: 4rem;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HamburgerContainer = styled.div<{ click: boolean }>`
  position: relative;
  width: 5rem;
  cursor: pointer;
  z-index: 3;
  /* height: 44px; */
  &:after {
    content: "";
    display: block;
    padding-bottom: 60%;
  }
  & span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.color};
    border-radius: 4px;
    transition: all 0.4s;
    ${(props) =>
      props.click &&
      css`
        background-color: white;
      `}
  }
  & span:nth-of-type(1) {
    top: 0;
    ${(props) =>
      props.click &&
      css`
        webkit-transform: translateY(1.4rem) rotate(-315deg);
        transform: translateY(1.4rem) rotate(-315deg);
      `}
  }

  & span:nth-of-type(2) {
    top: 1.3rem;
    ${(props) =>
      props.click &&
      css`
        opacity: 0;
      `}
  }

  & span:nth-of-type(3) {
    bottom: 0;
    ${(props) =>
      props.click &&
      css`
        -webkit-transform: translateY(-1.4rem) rotate(315deg);
        transform: translateY(-1.4rem) rotate(315deg);
      `}
  }
`;
export const HeaderPage = styled.div<{ click: boolean }>`
  position: absolute;
  z-index: 2;
  top: -100vh;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #252525;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.click &&
    css`
      top: 0;
    `}
`;
export const MenuContainer = styled.div<{ isMobile: boolean }>`
  width: 60%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: row;
  z-index: 3;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 3.2rem;
  opacity: 0;
  animation: ${SlideUp} 1s 0.5s forwards;
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      height: 40vh;
    `}
  & div {
    cursor: pointer;
  }
`;
