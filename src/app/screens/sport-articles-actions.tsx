import { ActionType, createAction } from "typesafe-actions";
import { ThunkAction } from "redux-thunk";
import { TRootState } from "app/reducers";
import { TArticle, TListOfArticles } from "app/reducers/data";
import { getSportArticles } from "api-wrapper/getSportArticles";

export const getSportArticlesInitAction = createAction(
  "articles-sport/FETCH_INIT"
)();
export const getSportArticlesSuccessAction = createAction(
  "articles-sport/FETCH_SUCCESS"
)<Pick<TListOfArticles, "articles">>();
export const getSportArticlesFailureAction = createAction(
  "articles-sport/FETCH_FAILURE"
)();

export type TGetSportArticlesInitAction = ActionType<
  typeof getSportArticlesInitAction
>;
export type TGetSportArticlesSuccessAction = ActionType<
  typeof getSportArticlesSuccessAction
>;
export type TGetSportArticlesFailureAction = ActionType<
  typeof getSportArticlesFailureAction
>;
export type TGetSportArticlesActions =
  | TGetSportArticlesSuccessAction
  | TGetSportArticlesFailureAction
  | TGetSportArticlesInitAction;
export type TFetchFashionArticlesAsyncAction = () => ThunkAction<
  void,
  TRootState,
  null,
  TGetSportArticlesActions
>;
export const fetchSportArticles: TFetchFashionArticlesAsyncAction = () => (
  dispatch
) => {
  dispatch(getSportArticlesInitAction());
  return getSportArticles()
    .then((payload) => {
      return dispatch(
        getSportArticlesSuccessAction({
          articles: payload.articles,
        })
      );
    })
    .catch(() => {
      dispatch(getSportArticlesFailureAction());
      return dispatch(fetchSportArticles());
    });
};
