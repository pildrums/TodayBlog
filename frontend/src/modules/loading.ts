import { ActionType, createAction, createReducer } from "typesafe-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
)();

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
)();

const actions = { startLoading, finishLoading };

type TLoadingAction = ActionType<typeof actions>;

type TIinitialState = {};

const initialState: TIinitialState = {};

const loading = createReducer<TIinitialState, TLoadingAction>(initialState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});

export default loading;
