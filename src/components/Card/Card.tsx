/* eslint-disable @next/next/no-img-element */

import React, { FC } from "react";
import MyUseFetch from "../../hooks/useFetch";

import {
  CardStyleDiv,
  CardStyleFeat,
  CardInfo,
  CardInfoMain,
  CardImg,
  CardsDiv,
} from "../../styles/Card/CardStyle";


const Card: FC = () => {
  
  const url = "https://apiwork11.herokuapp.com/";
  const jobs = MyUseFetch(url)
  
  return (
    <CardsDiv>
      {jobs.map((item) => (
        <CardStyleDiv key={item.id}>
          <CardInfoMain>
            <CardImg>
              <img src={item.company.logo} alt={item.company.name} />
            </CardImg>
            <div>
              <h2>{item.job}</h2>
              <p>{item.company.name}</p>
              <p>
                {item.descript.ago} {item.descript.time} {item.descript.only}
              </p>
            </div>
          </CardInfoMain>
          {item.mode && (
            <CardStyleFeat>
              <CardInfo mode="true">{item.mode?.new}</CardInfo>
              <CardInfo mode="false">{item.mode?.feat}</CardInfo>
            </CardStyleFeat>
          )}
        </CardStyleDiv>
      ))}
    </CardsDiv>
  );
};

export default Card;

/*          {item.tags?.id.map((item) => (
            <p key={item}>{item}</p>
          ))}*/
