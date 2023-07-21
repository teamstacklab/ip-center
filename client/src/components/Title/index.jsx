import React from "react";
import { TitleBox, TitleIcon, TitleText } from "./styled";

export const Title = ({ children, icon, color, iconColor }) => {
  return (
    <React.Fragment>
      <TitleBox color={color}>
        <TitleIcon iconColor={iconColor}>{icon}</TitleIcon>
        <TitleText>{children}</TitleText>
      </TitleBox>
    </React.Fragment>
  );
};

const TitleEditable = TitleBox;

TitleEditable.Icon = TitleIcon;
TitleEditable.Text = TitleText;

export default TitleEditable;
