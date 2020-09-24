import { combineReducers } from "redux";

import { messagesReducer } from "./messages";
import { rateReducer } from "./rate";

export const reducers = combineReducers({ rate: rateReducer, messages: messagesReducer });
