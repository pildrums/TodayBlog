import styled from "styled-components";

interface IButtonProps {
  [props: string]: any;
}

function Button({ ...props }: IButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button`
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
`;

export default Button;
