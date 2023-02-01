// import React, { useState, useEffect } from "react";
import React, { useState, useCallback, useEffect, useRef, memo, MouseEvent } from 'react';
// import classNames from 'classnames';
import * as S from "styles/about/components/history/styles";
import { ScrollProgress } from 'pages/components/scrollprogress';
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useRouter } from "next/router";
import { ABOUT_HISTORY, ABOUT_HISTORY as HistoryItems } from "pages/constants/about";

export const DESKTOP_TAB = {
  width: "100%",
  margin: "0 auto 2rem auto",
};


export default function History() {
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
        <ScrollProgress></ScrollProgress>
        {/* <S.ProgressIndicator></S.ProgressIndicator> */}
        <S.MainContainer isMobile={isMobile} className="mount">
          {HistoryItems.map(({ YEAR, TITLE, CONTENT, IsAlumni, IsActing }) => (
              <S.TextWrapper key={YEAR} data-aos="fade">
                  <S.TitleTextElementWrapper>
                      <span><b>{YEAR}</b></span>
                      <span style={{fontSize: "2.4rem"}}>{TITLE}</span>
                  </S.TitleTextElementWrapper>
                  <S.TextElementWrapper>
                    {CONTENT.map((item) => <p>
                      {item}
                    </p>)}
                  </S.TextElementWrapper>
              </S.TextWrapper>
          ))}
        </S.MainContainer>
    </S.Container>
  );
}