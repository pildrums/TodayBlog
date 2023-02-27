import Link from "next/link";
import { ChangeEvent } from "react";
import styled from "styled-components";
import Button from "../common/Button";

interface IAuthFormProps {
  type: string;
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  form: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
}

interface ITextMap {
  [key: string]: string;
}

const textMap: ITextMap = {
  login: "로그인",
  register: "회원가입",
};

function AuthForm({ type, onChange, onSubmit, form }: IAuthFormProps) {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="패스워드"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="패스워드 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link href="/register">회원가입</Link>
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${(props) => props.theme.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${(props) => props.theme.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${(props) => props.theme.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.gray[9]};
    }
  }
`;

export default AuthForm;
