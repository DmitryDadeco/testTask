import { rateInitialState } from "./rate";
import { messagesInitialState } from "./messages";
import { State } from "../types/store";

export const initialState: State = {
    rate: rateInitialState,
    messages: messagesInitialState,
};
