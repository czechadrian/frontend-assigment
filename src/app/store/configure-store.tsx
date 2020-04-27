import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer, { TRootState } from "app/reducers";

const composeEnv =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line @typescript-eslint/no-explicit-any

export const configureStore = (initialState: TRootState | undefined) =>
    createStore(rootReducer, initialState, composeEnv(applyMiddleware(thunk)));

export default configureStore;
