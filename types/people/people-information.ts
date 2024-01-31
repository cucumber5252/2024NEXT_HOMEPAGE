import { StaticImageData } from "next/image";

export interface PEOPLE_INFORMATION_TYPE {
  //typescript에서 item의 타입을 지정하는데 사용된다. 각 요소가 가진 속성을 정확히 타입 체킹 가능하다.
  gen: number;
  name: string;
  department: string;
  classOf: number;
  imgSrc: string;
  masterDegree?: string;
  secondMajor?: string;
  managementTeam: string;
}
