import Link from "next/link";
import styled from "styled-components";
import Button from "../common/Button";

function AuthForm() {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="패스워드"
          type="password"
        />
        <Button>로그인</Button>
      </form>
      <Footer>
        <Link href="/register">회원가입</Link>
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
