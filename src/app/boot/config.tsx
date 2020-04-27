import * as React from "react";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { fetchFashionArticles } from "app/screens/fashion-articles-actions";
import { fetchSportArticles } from "app/screens/sport-articles-actions";

const Config: FunctionComponent = () => {
  const dispatch = useDispatch();
  dispatch(fetchFashionArticles());
  dispatch(fetchSportArticles());

  return <></>;
};

export default Config;
