import produce from "immer";
import { ActionType, createAction, createReducer } from "typesafe-actions";

// 액션 타입
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

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
