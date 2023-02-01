import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as S from "styles/home/style";
import { useMediaQuery } from "react-responsive";
import Intro from "pages/components/intro";
import Logo from "public/assets/logo.png";
import MainBG from "public/assets/home-bg-1.png";
import Section2Img from "public/assets/main_section2.png";
import Text from "public/assets/homeMainSmallLogo.png";
import {
  RocketLottie,
  LaptopLottie,
  SessionLottie,
  ProjectLottie,
  DemodayLottie,
} from "pages/components/lottie/lottie";
import { Partners } from "pages/constants/partners";
import Sticky from "pages/components/sticky";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { ImageElementWrapper } from "styles/about/components/partners/styles";
export default function Main() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const partners = Partners;
  useEffect(() => {
    AOS.init();
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
          <S.Section1 isMobile={isMobile}>
            <div data-aos="fade-right">
              <LaptopLottie />
            </div>
            <div>
              <p data-aos="fade">
                <b>내 아이디어</b>를 내 <b>손</b>으로
              </p>
              <p data-aos="fade">
                고려대학교 소프트웨어 창업학회
                <span style={{ fontWeight: "700" }}>
                  &nbsp; NE<b>X</b>T
                </span>
                는
              </p>
              <p data-aos="fade">
                다양한 전공과 경험을 가진 사람들이 모여 함께 프로그래밍을
                공부하여 세상의 여러 문제를 해결해나가는 학회입니다
              </p>
            </div>
          </S.Section1>
          <Sticky></Sticky>
          <S.Section2>
            <S.TextWrapper isMobile={isMobile} data-aos="fade">
              <span>
                <b>What We Do</b>
              </span>
              <img src={Section2Img.src} />
            </S.TextWrapper>
            <S.LottieContainer isMobile={isMobile}>
              <S.LottieWrapper
                isMobile={isMobile}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <SessionLottie />
                <h2>Session</h2>
                <p>필수 기술 스택 습득</p>
              </S.LottieWrapper>
              <S.LottieWrapper
                isMobile={isMobile}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <ProjectLottie />
                <h2>Project</h2>
                <p>팀별 실전 서비스 개발</p>
              </S.LottieWrapper>
              <S.LottieWrapper
                isMobile={isMobile}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <DemodayLottie />
                <h2>Demoday</h2>
                <p>서비스 검증 및 평가</p>
              </S.LottieWrapper>
              <S.ArrowBG isMobile={isMobile}></S.ArrowBG>
            </S.LottieContainer>

            <S.LottieWrapper
              isMobile={isMobile}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <RocketLottie />

              <p>창업 경진대회 및 VC 투자 유치</p>
              <h2>"창업"</h2>
            </S.LottieWrapper>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "6rem",
              }}
            >
              <S.MoreBtn
                isMobile={isMobile}
                onClick={() => router.push("about")}
                // data-aos="fade"
              >
                + More Info
              </S.MoreBtn>
            </div>
          </S.Section2>
          <S.Section2 style={{ background: "black" }}>
            <S.TextWrapper isMobile={isMobile} data-aos="fade">
              <span>
                <b>Partners</b>
              </span>
              <p
                style={{
                  marginTop: "4rem",
                  marginBottom: "4rem",
                  fontWeight: "700",
                }}
              >
                <span>
                  고려대학교 소프트웨어 창업학회 NE<b>X</b>T 와 함께하는
                </span>
              </p>
            </S.TextWrapper>
            <S.PartnerContainer isMobile={isMobile}>
              {partners.map(({ name, src }) => (
                <div key={name} data-aos="fade">
                  <img src={src.src} />
                </div>
              ))}
            </S.PartnerContainer>
          </S.Section2>
        </S.Container>
      )}
    </div>
  );
}
