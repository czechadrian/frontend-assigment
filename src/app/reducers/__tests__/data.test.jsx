import { TFetchingStatus } from "../../constants";
import {
  getFashionArticlesFailureAction,
  getFashionArticlesInitAction,
  getFashionArticlesSuccessAction,
} from "../../screens/fashion-articles-actions";
import { data } from "../data";
import {
  getSportArticlesFailureAction,
  getSportArticlesInitAction,
  getSportArticlesSuccessAction
} from "../../screens/sport-articles-actions";
describe("Data reducer", function () {
  const payload = [
    {
      id: 789702,
      date: "2. februar 2019",
      image: "https://placeimg.com/280/180/nature",
      category: "sport",
      title:
        "Vålerengas førsterekke smadrer rivalene: - Seriegullet er I våre hender",
      preamble:
        "MERÅKER (VG) Finn-Hågen Krogh (28) opplevde den gedigne nedturen da han ble vraket til OL-sprinten i Sotsji etter at han først var tatt ut på laget. Nå føler han seg aldri trygg på å få starte i mesterskap.",
    },
  ];
  const previousState = {
    sportArticles: { articles: [], fetchingStatus: TFetchingStatus.Defined },
    fashionArticles: {
      articles: [],
      fetchingStatus: TFetchingStatus.Defined,
    },
  };

  it("should fetch fashion articles - init", () => {
    const action = getFashionArticlesInitAction();
    expect(action).toEqual({
      type: "articles-fashion/FETCH_INIT",
      meta: undefined,
    });

    const newState = data(previousState, action);

    expect(newState.fashionArticles.fetchingStatus).toEqual(
      TFetchingStatus.Initial
    );
  });

  it("should fetch fashion articles - success", () => {
    const action = getFashionArticlesSuccessAction({ articles: payload });
    expect(action).toEqual({
      type: "articles-fashion/FETCH_SUCCESS",
      meta: undefined,
      payload: { articles: payload },
    });

    const newState = data(previousState, action);

    expect(newState.fashionArticles.fetchingStatus).toEqual(
      TFetchingStatus.Success
    );
    expect(newState.fashionArticles.articles).toEqual(payload);
  });

  it("should fetch fashion articles - failure", () => {
    const action = getFashionArticlesFailureAction();
    expect(action).toEqual({
      type: "articles-fashion/FETCH_FAILURE",
      meta: undefined,
    });

    const newState = data(previousState, action);

    expect(newState.fashionArticles.fetchingStatus).toEqual(
      TFetchingStatus.Failure
    );
  });

  it("should fetch sport articles - init", () => {
    const action = getSportArticlesInitAction();
    expect(action).toEqual({
      type: "articles-sport/FETCH_INIT",
      meta: undefined,
    });

    const newState = data(previousState, action);

    expect(newState.sportArticles.fetchingStatus).toEqual(
      TFetchingStatus.Initial
    );
  });

  it("should fetch sport articles - success", () => {
    const action = getSportArticlesSuccessAction({ articles: payload });
    expect(action).toEqual({
      type: "articles-sport/FETCH_SUCCESS",
      meta: undefined,
      payload: { articles: payload },
    });

    const newState = data(previousState, action);

    expect(newState.sportArticles.fetchingStatus).toEqual(
      TFetchingStatus.Success
    );
    expect(newState.sportArticles.articles).toEqual(payload);
  });

  it("should fetch sport articles - failure", () => {
    const action = getSportArticlesFailureAction();
    expect(action).toEqual({
      type: "articles-sport/FETCH_FAILURE",
      meta: undefined,
    });

    const newState = data(previousState, action);

    expect(newState.sportArticles.fetchingStatus).toEqual(
      TFetchingStatus.Failure
    );
  });
});
