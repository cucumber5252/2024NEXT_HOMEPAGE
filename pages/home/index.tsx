import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as S from "styles/home/style";
import { useMediaQuery } from "react-responsive";
import Intro from "pages/components/intro";
import Logo from "public/assets/logo.png";
import MainBG from "public/assets/home-bg-1.png";
import LikeLionLogo from "public/assets/likelionLogo.png";
import Text from "public/assets/homeMainSmallLogo.png";
export default function Main() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>NEXT: HOME</title>
        <meta name="description" content="고려대학교 소프트웨어창업학회 NEXT" />
      </Head>
      {/* <Intro></Intro> */}
      {!loading && (
        <S.Container>
          <S.MainContainer>
            <S.MainWrapper isMobile={isMobile}>
              <S.MainContainerLogo>
                <img src={Logo.src} />
              </S.MainContainerLogo>
              <S.MainTextWrapper>
                <img src={Text.src} />
              </S.MainTextWrapper>
            </S.MainWrapper>
            <S.MainContainerBG src={MainBG.src} />
          </S.MainContainer>
          <S.Section1>
            <div></div>
            <div>
              <p>
                <b>내 아이디어</b>를 내 <b>손</b>으로
              </p>
            </div>
          </S.Section1>
        </S.Container>
      )}
    </div>
  );
}
