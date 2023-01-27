import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "pages/components/header";
import * as S from "styles/home/style";
import { useMediaQuery } from "react-responsive";
export default function Main() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div>
      <Head>
        <title>NEXT</title>
        <meta name="description" content="고려대학교 소프트웨어창업학회 NEXT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <S.Container></S.Container>
    </div>
  );
}
