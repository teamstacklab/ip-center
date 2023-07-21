import { styled } from "styled-components";

export const BoxSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: var(--nav-top-desktop);
  min-height: calc(100vh - var(--nav-top-desktop) * 3);
  padding: 40px calc(40px * 2.15);
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
