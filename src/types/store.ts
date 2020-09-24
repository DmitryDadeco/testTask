import { MessagesState } from "../reducers/messages";
import { RateState } from "../reducers/rate";

export interface State {
    rate: RateState;
    messages: MessagesState;
}
