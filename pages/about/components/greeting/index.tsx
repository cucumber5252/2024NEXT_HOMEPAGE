import React, { useState, useEffect } from "react";
import * as S from "styles/about/components/greeting/styles";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useRouter } from "next/router";
import kimhagyeong from "public/images/profile/kimhagyeong.jpg";

export const DESKTOP_TAB = {
  width: "100%",
  margin: "0 auto 2rem auto",
};

export default function Greeting() {
  // const router = useRouter();
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
    // <div> {!loading && (
    <S.Container isMobile={isMobile} className="mount">
        <S.ImageWrapper>
          <S.ImageElementWrapper>
            <img src={kimhagyeong.src} />
          </S.ImageElementWrapper>
        </S.ImageWrapper>
        <S.TextWrapper>
            <S.TextElementWrapper data-aos="fade">
                <div>
                    <p>안녕하세요. <span><b>NEXT x LIKELION</b></span> 11기 대표 김하경입니다.</p>
                    <p>코딩. 따분한 강의와 두꺼운 교재에 결국 흐지부지 끝나버리지는 않으셨나요?</p>
                    <p>저희 NEXT X LIKELION은 단순히 코드만 따라서 치는 코딩이 아닌 <b>아이디어를 현실로 만들어주는</b> "도구"로서의 코딩을 하실 수 있도록 도와드립니다.</p>
                    <p>코딩에 대해 전혀 몰라도 걱정하실 필요 없습니다! 여러분을 위해 언제든지 도와줄 준비가 되어있는 운영진분들이 옆에 있으니 포기하지 않고 배울 열정만 있으시다면 충분합니다.</p>
                    <p>1년 동안 후회 없이 배우고 경험하실 수 있도록, 다양한 주제로 매주 진행되는 세션, 팀원들과 함께 직접 기획하고 개발까지 해볼 수 있는 해커톤 프로젝트 & 데모데이, 그리고 그 외의 많은 오프라인 활동들이 준비되어 있습니다.</p>
                    <p>비슷한 목표를 가진 뜻이 맞는 동료들, 여러 서비스들을 직접 만들어보면서 배운 경험과 개발 능력, 그리고 직접 창업하신 선배들과의 시간까지.</p>
                    <p>NEXT X LIKELION은 제 인생에서 가장 뜻 깊었던 활동이었습니다. 그리고 여러분에게도 이러한 경험이 될 것이라고 확신합니다.</p>
                    <p>올 한 해 NEXT X LIKELION과 함께 여러분의 상상을 현실로 만들어보세요.</p>
                      {/* <span style={{ fontWeight: "700" }}>
                        &nbsp; NE<b>X</b>T
                      </span> */}
                </div>
                <p><b style={{ display: "flex", justifyContent: "flex-end"}}>11기 대표 김하경</b></p>
            </S.TextElementWrapper>
        </S.TextWrapper>
    </S.Container>
    // )};</div>
    );
}