import { ItemProps } from "./../../../node_modules/rc-overflow/es/Item.d";
import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container2 = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;
  padding: 3rem 10%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardDiv = styled.div`
  width: 300px;
  height: 250px;

  margin: 0 1rem 5rem 1rem;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  /* margin-bottom: 5rem; */
`;

export const CardTopDiv = styled.div`
  /* width: 700px; */
  width: 41.1764 rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const GenerationDiv = styled.div`
  width: 73.09px;
  height: 39.39px;

  padding: 10px 20px;
  margin: 0px 2;
  gap: 10px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: #f7941e;

  color: #fff;
  font-family: Inter;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

export const LinkToUrl = styled.a`
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const OccupationDiv = styled.div`
  width: 80px;
  height: 35px;

  padding: 20px 50px;
  margin: 0px 7px;
  gap: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #f7941e;
  background: #fff;

  color: #f7941e;
  text-align: center;

  font-family: Inter;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LogoImgDiv = styled.div`
  width: 84px;
  height: 43px;
  & img {
    width: 100%;
  }
`;

export const ThumbnailImgDiv = styled.div`
  width: 300px;
  height: 170px;
  & img {
    width: 100%;
    cursor: pointer;
  }
  padding: 10px;
`;

export const CommentDiv = styled.div`
  color: #000;
  width: 300px;
  font-family: Inter;
  text-align: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1rem;
`;
