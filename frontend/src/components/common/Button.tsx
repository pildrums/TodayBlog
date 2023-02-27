import styled, { css } from "styled-components";

interface IButtonProps {
  [props: string]: any;
}

function Button({ ...props }: IButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button<{ fullWidth?: boolean; cyan?: boolean }>`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.gray[8]};
  &:hover {
    background: ${(props) => props.theme.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding: 0.75rem 0;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${(props) => props.theme.cyan[5]};
      &:hover {
        background: ${(props) => props.theme.cyan[4]};
      }
    `}
`;

export default Button;
