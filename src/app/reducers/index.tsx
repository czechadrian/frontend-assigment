import { combineReducers } from "redux";
import { data, initialState, TArticles } from "app/reducers/data";

export interface TRootState {
  data: TArticles;
}

export const TRootStateInitial: TRootState = {
  data: initialState,
};

const rootReducer = combineReducers<TRootState>({
  data,
});

export default rootReducer;
