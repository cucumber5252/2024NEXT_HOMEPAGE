import styled, { css } from "styled-components";
// import { colors } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #000;
`;
// export const Header = styled.div`
//   width: 100%;
//   height: 6.2rem;
//   position: absolute;
//   box-shadow: 0px 3px 6px #00000029;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 0;
// `;
// export const HeaderContent = styled.div`
//   width: 90%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   & i {
//     cursor: pointer;
//   }
// `;
// export const SubTitle = styled.div`
//   color: #4f3500;
//   /* font-weight: 700; */
//   text-align: center;
//   font-size: 2.4rem;
//   margin-top: 8.4rem;
//   margin-bottom: 2.2rem;
//   font-family: "SlowSlow";
// `;
// export const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 80%;
// `;

// export const Btn = styled.div`
//   width: 100%;
//   height: 8.4rem;
//   background: ${(props) => props.color};
//   box-shadow: 0px 3px 6px #00000029;
//   border: 2px solid #1d1b1c;
//   border-radius: 12px;
//   margin-bottom: 1rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.6rem;
//   color: white;
//   font-size: 1.8rem;
//   position: relative;
//   & img {
//     position: absolute;
//     left: -20px;
//     width: 17%;
//   }
// `;
// export const BtnWrapper = styled.div`
//   margin-top: 1rem;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
// `;
// export const SubBtn1 = styled(Btn)`
//   width: 50%;
//   height: 5.6rem;
// `;
// export const SubBtn2 = styled(Btn)`
//   width: 45%;
//   height: 5.6rem;
//   color: black;
// `;
// export const NoPostContainer = styled.div`
//   width: 100%;
//   padding-bottom: 120%;
//   margin-top: 2rem;
//   margin-bottom: 10rem;
//   background: #ffffff80 0% 0% no-repeat padding-box;
//   border: 2px dashed #333333;
//   border-radius: 12px;
//   position: relative;
// `;
// export const NoPostInfo = styled.div`
//   width: 100%;
//   font-family: "slowslow";
//   font-size: 2.2rem;
//   text-align: center;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
// export const ShareContainer = styled.div`
//   width: 100px;
//   margin: 0 auto;
//   margin-bottom: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// export const URLShareWrapper = styled.div`
//   margin: 2rem;
// `;
// export const URLShareInput = styled.div`
//   width: 90%;
//   height: 3.5rem;
//   background: #ffffff;
//   box-shadow: inset 0px 2px 6px #00000029;
//   border: 1px solid #1d1b1c;
//   border-radius: 6px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 6px;
//   margin: 0 auto;
//   & input {
//     width: 80%;
//     height: 3.5rem;
//     background: none;
//     color: #a5a5a5;
//     border: none;
//   }
// `;
// export const URLShareButton = styled.button``;
// export const PostListContainer = styled.div`
//   width: 100%;
//   overflow-x: scroll;
//   white-space: nowrap;
//   display: block;
// `;
// export const PostListInfo = styled.div`
//   font-family: "SlowSlow";
//   text-align: center;
//   font-size: 2.2rem;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
// `;
// export const FrameBox = styled.div`
//   width: 210px;
//   ${(props) =>
//     props.id === 1 &&
//     css`
//       width: 105px;
//     `}
//   /* padding-bottom: 150%; */
//   margin-right: 2rem;
//   display: inline-block;
// `;
// export const ModalBg = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 2;
//   top: 0;
//   left: 0;
//   cursor: pointer;
// `;
// export const ModalContainer = styled.div`
//   width: 80%;
//   position: fixed;
//   background-color: white;
//   border-radius: 20px;
//   padding: 1.6rem;
//   z-index: 3;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
// export const ModalInfoContainer = styled.div`
//   width: 90%;
//   text-align: center;
//   display: flex;
//   margin: 0 auto;
//   justify-content: space-between;
//   margin-top: 1rem;
//   margin-bottom: 1rem;
//   & div:last-child {
//     cursor: pointer;
//   }
// `;
// export const ModalPostContainer = styled.div`
//   width: 90%;
//   max-width: 387px;
//   position: fixed;
//   /* background-color: white; */
//   border-radius: 20px;
//   padding: 1.6rem;
//   z-index: 3;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
// export const ModalPostWrapper = styled.div`
//   width: 90%;
//   margin: 0 auto;
// `;

// export const SetHiddenConatainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 1rem;
// `;
// export const SetHiddenBtn = styled.label`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   position: relative;

//   & input {
//     appearance: none;
//     position: relative;
//     box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.25);
//     background-color: white;
//     border-radius: 4px;
//     width: 10rem;
//     height: 3rem;
//     cursor: pointer;
//     margin-left: 1rem;
//   }
//   & input::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     width: 5rem;
//     height: 3rem;
//     background-color: #ff7575;
//     border-radius: 4px;
//     transition: left 250ms linear;
//   }
//   & input:checked::before {
//     left: 5rem;
//   }
//   & input:checked {
//   }
// `;
// export const HiddenSpanWrapper = styled.div`
//   font-size: 1.2rem;
//   /* padding: 1rem; */
//   width: 100%;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   z-index: 1;
//   pointer-events: none;
//   & span {
//     width: 50%;
//     text-align: center;
//   }
// `;
