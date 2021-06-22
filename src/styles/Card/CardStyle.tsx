import styled from "@emotion/styled";

interface Info {
  mode: string;
}

export const CardStyleDiv = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
  /* width: 600px; */
  background: #ffffff;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 10px;
`;
export const CardStyleFeat = styled.div`
  display: flex;
`;
export const CardInfo = styled.p<Info>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0 2.5px 0 2.5px;
  width: 58.56px;
  height: 20px;
  color: white;
  background: ${({ mode }) => (mode === "true" ? "#30C5FF" : "#66B3BA")};
  border-radius: 5px;
  font-weight: 500;
  font-family: "Noto Sans JP", sans-serif;
`;
export const CardInfoMain = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  font-family: "Noto Sans JP", sans-serif;
  /* width: 455px; */
  /* justify-content: space-around; */
`;
export const  CardImg = styled.div`
    margin-right: 10px;
`
export const CardsDiv = styled.div`
  width: 600px;
`