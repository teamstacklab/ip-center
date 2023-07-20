import React from "react";
import { TitleBox, TitleIcon, TitleText } from "./styled";

export const Title = ({ children, color, icon }) => {
  return (
    <React.Fragment>
      <TitleBox color={ color }>
        <TitleIcon>{ icon }</TitleIcon>
        <TitleText>{ children }</TitleText>
      </TitleBox>
    </React.Fragment>
  );
};
