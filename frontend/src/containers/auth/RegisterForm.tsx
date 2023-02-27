import AuthForm from "@/components/auth/AuthForm";
import { TRootState } from "@/modules";
import { changeField, initializeForm } from "@/modules/auth";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  // Hooks
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }: TRootState) => ({
    form: auth.register,
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
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

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
