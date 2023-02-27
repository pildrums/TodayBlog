import { ActionType, createAction, createReducer } from "typesafe-actions";

const SAMPLE_ACTION = "auth/SAMPLE_ACTION";

export const sampleAction = createAction(SAMPLE_ACTION)();

const actions = { sampleAction };

type TSampleAction = ActionType<typeof actions>;

type TIinitialState = {};

const initialState: TIinitialState = {};

const auth = createReducer<TIinitialState, TSampleAction>(initialState, {
  [SAMPLE_ACTION]: (state, action) => state,
});

export default auth;
