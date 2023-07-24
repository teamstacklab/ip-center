import { styled } from "styled-components";

export const BoxSection = styled.section`
  display: flex;
  flex-direction: ${props => props.$row ? "roe" : "column"};
  width: 100%;
  margin-top: var(--nav-top-desktop);
  min-height: calc(100vh - var(--nav-top-desktop) * 3);
  padding: 40px calc(40px * 2.15);
  justify-content: ${props => props.$row ? "space-between" : 'flex-start'};
`;

export const BoxFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxGrid = styled.div`
  padding: ${(props) => props.p || "8px"};
  width: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.minW || 160}px, 1fr)
  );
  gap: ${(props) => props.gap || "10px"};
`;

export const SectionBox = styled(BoxSection)`
    @media screen and (max-width: 1440px){
        display: flex;
        flex-direction: column;
        padding: var(--padding-mobile);
        height: auto;
        gap: 0;
    }
`
