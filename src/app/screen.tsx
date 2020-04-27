import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { TRootState } from "app/reducers";
import Articles from "app/screens/articles";
import Config from "app/boot/config";

export interface TArticlesList {
  store: Store<TRootState>;
}

export const Screen: React.FunctionComponent<TArticlesList> = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <Config />
      <Articles />
    </Provider>
  );
};
