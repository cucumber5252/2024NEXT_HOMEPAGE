import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const color = keyframes`
0%{
  filter: grayscale(1)
}
100%{
  filter: grayscale(0)
}
`;
export const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  padding: 6rem;
  background: white;
  display: relative;

  ${(props) =>
    props.isMobile &&
    css`
      padding: 0;
      padding-left: 8rem;
      & div {
        padding-bottom: 5rem;
      }
    `}
`;

export const MainContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;


  ${(props) =>
    props.isMobile &&
    css`
      padding: 10rem 8%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & div {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 5rem;
      }
    `}
`;


export const TextWrapper = styled.div`
  width: 61.8%;
  padding: 0rem 8rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
`;

export const TitleTextElementWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 1.6rem;

  font-size: 1.6rem;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & > span {
    font-size: 3.2rem;
    font-weight: 600;
  }
  & span b {
    color: ${THEME.ORANGE};
  }
}
`;


export const TextElementWrapper = styled.div`
  width: 100%;
  position: relative;

  font-size: 1.6rem;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & p {
    line-height: 150%;
    padding-bottom: 1rem;
  }

  & > span {
    font-size: 3.6rem;
    font-weight: 600;
  }
  & span b {
    color: ${THEME.ORANGE};
  }
}
`;