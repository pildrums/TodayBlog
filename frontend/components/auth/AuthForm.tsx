import Button from "components/common/Button";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "styles/theme";

interface IAuthFormProps {
  type: string;
}

interface ITextMap {
  [key: string]: string;
}

const textMap: ITextMap = {
  login: "로그인",
  register: "회원가입",
};

function AuthForm({ type }: IAuthFormProps) {
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="패스워드"
          type="password"
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="패스워드 확인"
            type="password"
          />
        )}
        <Button red fullWidth>
          {text}
        </Button>
      </form>
      <Footer>
        {type === "login" ? (
          <Link href="/register">회원가입</Link>
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormWrapper>
  );
}

const AuthFormWrapper = styled.div`
  h3 {
    margin: 0;
    color: ${theme.gray[9]};
    margin-bottom: 1rem;
  }
  form {
    button {
      margin-top: 1rem;
    }
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  background: transparent;
  border-bottom: 1px solid ${theme.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${theme.red[4]};
    border-bottom: 1px solid ${theme.gray[9]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${theme.gray[5]};
    text-decoration: underline;
    &:hover {
      color: ${theme.gray[9]};
    }
  }
`;

export default AuthForm;
