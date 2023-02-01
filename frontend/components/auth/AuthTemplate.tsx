import { theme } from "styles/theme";
import Link from "next/link";
import { PropsWithChildren } from "react";
import styled from "styled-components";

function AuthTemplate({ children }: PropsWithChildren) {
  return (
    <AuthTemplateWrapper>
      <Box>
        <div className="logo-area">
          <Link href="/">오늘하루</Link>
        </div>
        {children}
      </Box>
    </AuthTemplateWrapper>
  );
}

const AuthTemplateWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.gray[1]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 8px;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: #fff;
  border-radius: 2px;
`;

export default AuthTemplate;
