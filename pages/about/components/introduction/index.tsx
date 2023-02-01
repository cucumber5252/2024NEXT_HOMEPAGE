import React, { useState, useEffect } from "react";
import * as S from "styles/about/components/introduction/styles";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import Next10 from "public/images/next10/next10.jpg";
import { BlinkText } from "pages/components/typing";

export const DESKTOP_TAB = {
  width: "100%",
  margin: "0 auto 2rem auto",
};

export default function Introduction() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
  const isMobile = useMediaQuery({ maxWidth: 820 });

  useEffect(() => {
    AOS.init();
    if (isMobile != undefined && isDesktop != undefined) {
      setLoading(false);
    }
  }, []);
  return (
    <S.Container isMobile={isMobile} className="mount">
      <S.MainImageWrapper>
        <img src={Next10.src} />
        {/* <S.ContainerBG src={Next10.src} /> */}
      </S.MainImageWrapper>
      <S.MainTextWrapper>
        <span style={{fontSize: "2.8rem"}}>작년 한 해동안, 우리는 함께 치열하게 고민하고 발전해왔습니다.</span><br />
        <span>빛나는 2023년을 함께할 <br/>
        <b>NEXT 11기</b> 여러분을 기다립니다.</span>
      </S.MainTextWrapper>
    </S.Container>
  );
}
