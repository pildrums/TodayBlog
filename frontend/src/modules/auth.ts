import { AxiosError } from "axios";
import produce from "immer";
import {
  ActionType,
  createAction,
  createAsyncAction,
  createReducer,
} from "typesafe-actions";
import { IAuth } from "@/lib/api/auth";

// 액션 타입
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

export const REGISTER = "auth/REGISTER";
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

export const getLoginAsync = createAsyncAction(
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
)<string, IAuth, AxiosError>();

export const getRegisterAsync = createAsyncAction(
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
)<string, IAuth, AxiosError>();

// 액션 생성 함수
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
)();
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form)();

// 액션 객체 타입 준비
const actions = { changeField, initializeForm };

type TAuthAction = ActionType<typeof actions>;

type TIinitialState = {
  [prop: string]: any;
};

const initialState: TIinitialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
};

const auth = createReducer<TIinitialState, TAuthAction>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, (draft) => {
      draft[form][key] = value;
    }),
  [INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initialState[form],
  }),
});
export default auth;
