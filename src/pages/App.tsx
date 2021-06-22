import React, { FC, useState } from "react";
import Card from "../components/Card/Card";
import styled from "@emotion/styled";
import Search from "../components/search/Search";

const MainApp = styled.main`
  display:flex;
  justify-content:center;
  h2 {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 500;
  }
`;
interface Tag {
  HTML:string
  CSS:string
  JS:string
}
const App: FC = () => {
  const [tags, setTags] = useState<Tag>({
    HTML:'',
    CSS:'',
    JS:'',
  })
  
  return (
    <MainApp>
      <Search  tags={tags} setTags={setTags}/>
      <Card />
    </MainApp>
  );
};

export default App;
