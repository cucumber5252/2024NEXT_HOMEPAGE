import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const NavBarContainer = styled.div`
  padding: 34px 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  z-index: 10;
  box-sizing: border-box;
`;

export const NavBarLogo = styled.img`
  cursor: pointer;
  width: 10rem;
`;

export const NavLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledNav = styled.nav<{ isWhite: boolean; key: any }>`
  text-decoration: none;
  color: ${({ isWhite }) => (isWhite ? THEME.WHITE : THEME.BLACK)};
  font-size: 16px;
  padding: 10px;

  cursor: pointer;
  &.active {
    margin-bottom: -2px;
    border-bottom: 2px solid ${THEME.ORANGE};
    color: ${THEME.ORANGE};
  }

  & + & {
    margin-left: 5%;
  }
`;
// 모바일
export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10000;
  .ant-menu-dark {
    background-color: black;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background-color: ${THEME.ORANGE};
  }

  .ant-menu-root {
    height: calc(100vh - 6rem);
    z-index: 10000;
  }
`;

export const Header = styled.div`
  background-color: black;
  height: 6rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1000000;
`;

export const HeaderWhiteSpace = styled.div`
  z-index: -1;
  height: 6rem;
`;

const slideOut = keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0);
  }
`;

const slideIn = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100%);
  }
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${slideOut} 0.5s cubic-bezier(0.83, 0, 0.17, 1);
        `
      : css`
          animation: ${slideIn} 0.5s cubic-bezier(0.83, 0, 0.17, 1);
        `}
`;

export const NoticeContainer = styled.section`
  color: #ffff;
  position: absolute;
  left: 2.4rem;
  bottom: 3rem;
  > p {
    margin: 2rem 0;

    &:nth-child(2) {
      margin-bottom: 4rem;
    }
  }
`;
