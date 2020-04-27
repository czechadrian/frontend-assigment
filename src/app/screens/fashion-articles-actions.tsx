import { ActionType, createAction } from "typesafe-actions";
import { ThunkAction } from "redux-thunk";
import { TRootState } from "app/reducers";
import { TArticle, TListOfArticles } from "app/reducers/data";
import { getFashionArticles } from "api-wrapper/getFashionArticles";

export const getFashionArticlesInitAction = createAction(
  "articles-fashion/FETCH_INIT"
)();
export const getFashionArticlesSuccessAction = createAction(
  "articles-fashion/FETCH_SUCCESS"
)<Pick<TListOfArticles, "articles">>();
export const getFashionArticlesFailureAction = createAction(
  "articles-fashion/FETCH_FAILURE"
)();

export type TGetFashionArticlesInitAction = ActionType<
  typeof getFashionArticlesInitAction
>;
export type TGetFashionArticlesSuccessAction = ActionType<
  typeof getFashionArticlesSuccessAction
>;
export type TGetFashionArticlesFailureAction = ActionType<
  typeof getFashionArticlesFailureAction
>;

export type TGetFashionArticlesActions =
  | TGetFashionArticlesSuccessAction
  | TGetFashionArticlesFailureAction
  | TGetFashionArticlesInitAction;

export type TFetchFashionArticlesAsyncAction = () => ThunkAction<
  void,
  TRootState,
  null,
  TGetFashionArticlesActions
>;
export const fetchFashionArticles: TFetchFashionArticlesAsyncAction = () => (
  dispatch
) => {
  dispatch(getFashionArticlesInitAction());
  return getFashionArticles()
    .then((payload) => {
      return dispatch(
        getFashionArticlesSuccessAction({ articles: payload.articles })
      );
    })
    .catch(() => {
      dispatch(getFashionArticlesFailureAction());
      return dispatch(fetchFashionArticles());
    });
};
