import React from "react";
import { TitleBox, TitleIcon, TitleText } from "./Style";

export const Title = ({ children, icon, color, iconColor, iconSize, fw }) => {
  return (
    <React.Fragment>
      <TitleBox color={color}>
        <TitleIcon iconSize={iconSize} iconColor={iconColor}>{icon}</TitleIcon>
        <TitleText fw={fw}>{children}</TitleText>
      </TitleBox>
    </React.Fragment>
  );
};

const TitleEditable = TitleBox;

TitleEditable.Icon = TitleIcon;
TitleEditable.Text = TitleText;

export default TitleEditable;
