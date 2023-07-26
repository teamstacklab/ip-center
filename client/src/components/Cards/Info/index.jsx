import React from "react";
import {
  InfoBody,
  InfoTitle,
  InfoBox,
  InfoButton,
  InfoIcon,
  InfoTitleIcon,
  InfoTitleText,
  InfoTitleBox,
} from "./styled";

const LinkContext = React.createContext();

export const Info = ({ children, link }) => {
  const [linkUrl, setLinkUrl] = React.useState(link);

  return (
    <InfoBox to={link}>
      <LinkContext.Provider value={{ linkUrl, setLinkUrl }}>
        {children}
      </LinkContext.Provider>
      <InfoButton to={link}>
        Saiba mais
        <InfoIcon />
      </InfoButton>
    </InfoBox>
  );
};

Info.Title = ({ children, icon }) => {
  const { linkUrl } = React.useContext(LinkContext);
  return (
    <InfoTitleBox to={linkUrl}>
      <InfoTitle>
        <InfoTitleIcon>{icon}</InfoTitleIcon>
        <InfoTitleText>{children}</InfoTitleText>
      </InfoTitle>
    </InfoTitleBox>
  );
};

Info.Body = InfoBody;
