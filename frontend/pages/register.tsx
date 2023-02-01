import AuthForm from "components/auth/AuthForm";
import AuthTemplate from "components/auth/AuthTemplate";

interface IregisterProps {}

function Register() {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
}

export default Register;
