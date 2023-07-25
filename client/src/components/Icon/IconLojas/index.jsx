import { styled } from "styled-components";

import { Shop } from "react-bootstrap-icons";

import { ContainerTitle } from "../../Home/HomeLojas/Style";

const ContainerIcon = styled(ContainerTitle)`
    margin-top: 10px;
    display: flex;
    gap: 7px;
    justify-content: start;
`

const IconLoja = styled(Shop)`
    font-size: 2em;
    color: var(--orange-primary);
    @media screen and (max-width: 1440px) {
        font-size: 1.8em;
    }
`

export const TitleLojas = styled.h2`
  font-size: 1.4em;
  font-weight: 700;
  color: var(--orange-tertiary);
  @media screen and (max-width: 1440px) {
    font-size: 22px;
  }
`;


function IconLojas() {
    return (
        <ContainerIcon>
            <IconLoja />
            <TitleLojas>Lojas</TitleLojas>
        </ContainerIcon>
    )
}

export default IconLojas