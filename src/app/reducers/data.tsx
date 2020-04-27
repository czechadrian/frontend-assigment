import { createReducer } from "typesafe-actions";
import produce from "immer";
import {
  getFashionArticlesFailureAction,
  getFashionArticlesInitAction,
  getFashionArticlesSuccessAction,
  TGetFashionArticlesActions,
} from "app/screens/fashion-articles-actions";
import {
  getSportArticlesFailureAction,
  getSportArticlesInitAction,
  getSportArticlesSuccessAction,
  TGetSportArticlesActions,
} from "app/screens/sport-articles-actions";
import { TFetchingStatus } from "app/constants";

export interface TArticle {
  id: number;
  date: string;
  image: string;
  category: string;
  title: string;
  preamble: string;
}

export interface TListOfArticles {
  articles: TArticle[];
  fetchingStatus: TFetchingStatus;
}

export interface TArticles {
  fashionArticles: TListOfArticles;
  sportArticles: TListOfArticles;
}
export const initialState: TArticles = {
  fashionArticles: { articles: [], fetchingStatus: TFetchingStatus.Defined },
  sportArticles: { articles: [], fetchingStatus: TFetchingStatus.Defined },
};

export type TFetchDataActions =
  | TGetFashionArticlesActions
  | TGetSportArticlesActions;

export const data = createReducer<TArticles, TFetchDataActions>(initialState)
  .handleAction(getFashionArticlesInitAction, (state) =>
    produce(state, (draftState) => {
      draftState.fashionArticles.fetchingStatus = TFetchingStatus.Initial;
    })
  )
  .handleAction(getFashionArticlesFailureAction, (state) =>
    produce(state, (draftState) => {
      draftState.fashionArticles.fetchingStatus = TFetchingStatus.Failure;
    })
  )

  .handleAction(getFashionArticlesSuccessAction, (state, action) =>
    produce(state, (draftState) => {
      const fashionArticles = draftState.fashionArticles;
      fashionArticles.articles = action.payload.articles;
      fashionArticles.fetchingStatus = TFetchingStatus.Success;
    })
  )
  .handleAction(getSportArticlesInitAction, (state) =>
    produce(state, (draftState) => {
      draftState.sportArticles.fetchingStatus = TFetchingStatus.Initial;
    })
  )
  .handleAction(getSportArticlesSuccessAction, (state, action) =>
    produce(state, (draftState) => {
      const sportArticles = draftState.sportArticles;
      sportArticles.articles = action.payload.articles;
      sportArticles.fetchingStatus = TFetchingStatus.Success;
    })
  )
  .handleAction(getSportArticlesFailureAction, (state) =>
    produce(state, (draftState) => {
      draftState.sportArticles.fetchingStatus = TFetchingStatus.Failure;
    })
  );
