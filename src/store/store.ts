import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialState } from "../reducers/initialState";
import { reducers } from "../reducers/reducers";

export const store = createStore(reducers, initialState, composeWithDevTools());
