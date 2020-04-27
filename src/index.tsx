import React from "react";
import ReactDOM from "react-dom";
import configureStore from "app/store/configure-store";
import { Screen } from "app/screen";

const store = configureStore(undefined);
const rootEl = document.getElementById("root");

export type Dispatch = typeof store.dispatch;
ReactDOM.render(<Screen store={store} />, rootEl);
