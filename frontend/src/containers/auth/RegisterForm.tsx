import AuthForm from "@/components/auth/AuthForm";
import { TRootState } from "@/modules";
import { changeField, initializeForm, register } from "@/modules/auth";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  // Hooks
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }: TRootState) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  // Function
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      }),
    );
  };
  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // TODO: 오류 처리
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류 발생!");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterForm;
