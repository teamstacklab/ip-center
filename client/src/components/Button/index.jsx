import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  padding: 10px calc(2.25 * 10px);
  color: ${(props) => props.color || "var(--brown-primary)"} !important;
  width: fit-content;
  background: ${(props) =>
    props.bg || "var(--orange-primary)"};
  border-radius: ${(props) => props.radius || "8px"};
  box-shadow: 0 0 10px var(--shadow-primary);
  text-decoration: none;
  font-weight: 600;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  transition: all 150ms !important;
  &:hover {
    background: ${(props) => props.bgHover || "var(--orange-primary-hover)"}; 
  }
`;
