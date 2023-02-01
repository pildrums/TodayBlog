import { theme } from "styles/theme";
import styled, { css } from "styled-components";

export default function Button(props: any) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button<{ fullWidth: boolean; red: boolean }>`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  color: ${theme.gray[0]};
  background: ${theme.gray[7]};
  &:hover {
    background: ${theme.gray[9]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding: 0.75rem 0;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.red &&
    css`
      background: ${theme.red[4]};
      &:hover {
        background: ${theme.red[5]};
      }
    `}
`;
