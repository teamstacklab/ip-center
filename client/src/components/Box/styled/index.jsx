import { styled } from "styled-components";

export const BoxSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: var(--nav-top-desktop);
  min-height: calc(100vh - var(--nav-top-desktop) * 3);
  gap: 16px;
  padding: 40px calc(40px * 2.15);
  @media screen and (max-width: 1280px) {
    padding: 28px calc(28px * 2.15);
  }
  @media screen and (max-width: 425px) {
    padding: 12px calc(12px * 2.15);
  }
  @media screen and (max-width: 375px) {
    padding: 8px calc(8px * 1.5);
  }
`;

export const BoxFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;

export const BoxGrid = styled.div`
  gap: ${(props) => props.gap || "10px"};
  width: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;
