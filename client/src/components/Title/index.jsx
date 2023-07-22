import React from "react";
import { TitleBox, TitleIcon, TitleText } from "./styled";

export const Title = ({ children, icon, color, iconColor, fw }) => {
  return (
    <React.Fragment>
      <TitleBox color={color}>
        <TitleIcon iconColor={iconColor}>{icon}</TitleIcon>
        <TitleText fw={fw}>{children}</TitleText>
      </TitleBox>
    </React.Fragment>
  );
};

const TitleEditable = TitleBox;

TitleEditable.Icon = TitleIcon;
TitleEditable.Text = TitleText;

export default TitleEditable;
