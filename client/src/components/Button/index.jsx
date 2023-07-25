import { styled } from "styled-components";
import { Link } from "react-router-dom";

const makeButtonRules = (color, bg, bgHover) => {
  return `
    background: ${bg};
    color: ${color} !important;
    &:hover {
      background: ${bgHover};    
    }
  `;
};

export const Button = styled(Link)`
  padding: 10px calc(2.25 * 10px);
  width: fit-content;
  border-radius: ${(props) => props.radius || "8px"};
  box-shadow: 0 0 10px var(--shadow-primary);
  text-decoration: none;
  font-weight: 600;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  transition: all 150ms !important;
  ${(props) =>
    props.$success
      ? makeButtonRules(
          "var(--orange-primary)",
          "var(--green-primary)",
          "var(--green-primary-hover)"
        )
      : props.$alert
      ? makeButtonRules(
          "var(--white)",
          "var(--red-primary)",
          "var(--red-primary-hover)"
        )
      : makeButtonRules(
          "var(--brown-primary)",
          "var(--orange-primary)",
          "var(--orange-primary-hover)"
        )}
`;
