import React, { FC } from "react";
// import Input from "./components/Input";

interface Tag {
  HTML: string;
  CSS: string;
  JS: string;
}

interface Props {
  setTags: React.Dispatch<React.SetStateAction<Tag>>;
  tags: {
    HTML: string;
    CSS: string;
    JS: string;
  };
}

const Search: FC<Props> = ({ tags, setTags }) => {

  const handleOnchange = (event: { target: { name: string; value: string } }) => {
    setTags({
      ...tags,
      [event.target.name]: event.target.value,
    });
  };
  
  return (
    <div>
        <div>
            <label htmlFor="box1">HTML</label>
            <input onChange={handleOnchange} checked={tags.HTML === 'HTML'} type="checkbox" name="HTML" value="HTML" id="box1" />
        </div>
        <div>
            <label htmlFor="box2">CSS</label>
            <input onChange={handleOnchange}  type="checkbox" name="CSS" value="CSS" id="box2" />
        </div>
        <div>
            <label htmlFor="box3">JS</label>
            <input onChange={handleOnchange}  type="checkbox" name="JS" value="JS" id="box3" />
        </div>
    </div>
  );
};

export default Search;
