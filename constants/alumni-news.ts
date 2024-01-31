import { ALUMNI_NEWS_INFORMATION_TYPE } from "./../types/people/alumni-news-information";

export const GENERATIONS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
};

export enum OCCUPATIONS {
  DEVELOPER = "개발자",
  ENTREPRENEUR = "창업가",
}

export const ALUMNI_NEWS_INFORMATION: ALUMNI_NEWS_INFORMATION_TYPE[] = [
  {
    gen: GENERATIONS.NINE,
    occupation: OCCUPATIONS.DEVELOPER,
    logoImgSrc: "/images/alumni/cardnews/삼성_로고.png",
    thumbnailImgSrc: "/images/alumni/cardnews/9기_개발자_삼성.png",
    comment: "스스로 못한다고 단정 지었던 것을 깨게 되었어요",
    url: "https://www.instagram.com/next_koreauniv/",
  },
  {
    gen: GENERATIONS.TWO,
    occupation: OCCUPATIONS.DEVELOPER,
    logoImgSrc: "/images/alumni/cardnews/KB국민은행_로고.png",
    thumbnailImgSrc: "/images/alumni/cardnews/2기_개발자_KB국민은행.png",
    comment: "기초부터 제대로 배울 수 있었어요",
    url: "https://www.instagram.com/p/CockJIEP0e6/?img_index=1/",
  },
  {
    gen: GENERATIONS.FIVE,
    occupation: OCCUPATIONS.DEVELOPER,
    logoImgSrc: "/images/alumni/cardnews/구글_로고.png",
    thumbnailImgSrc: "/images/alumni/cardnews/5기_개발자_구글.png",
    comment: "개발자가 되어 아이디어를 실현할 수 있게 되었어요",
    url: "https://www.instagram.com/p/CoXeMXgPncy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    gen: GENERATIONS.NINE,
    occupation: OCCUPATIONS.DEVELOPER,
    logoImgSrc: "/images/alumni/cardnews/삼성_로고.png",
    thumbnailImgSrc: "/images/alumni/cardnews/9기_개발자_삼성.png",
    comment: "스스로 못한다고 단정 지었던 것을 깨게 되었어요",
    url: "https://www.instagram.com/next_koreauniv/",
  },
  {
    gen: GENERATIONS.TWO,
    occupation: OCCUPATIONS.DEVELOPER,
    logoImgSrc: "/images/alumni/cardnews/KB국민은행_로고.png",
    thumbnailImgSrc: "/images/alumni/cardnews/2기_개발자_KB국민은행.png",
    comment: "기초부터 제대로 배울 수 있었어요",
    url: "https://www.instagram.com/next_koreauniv/",
  },
  {
    gen: GENERATIONS.FIVE,
    occupation: OCCUPATIONS.DEVELOPER,
    logoImgSrc: "/images/alumni/cardnews/구글_로고.png",
    thumbnailImgSrc: "/images/alumni/cardnews/5기_개발자_구글.png",
    comment: "개발자가 되어 아이디어를 실현할 수 있게 되었어요",
    url: "https://www.instagram.com/next_koreauniv/",
  },
];
