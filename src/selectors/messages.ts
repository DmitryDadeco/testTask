import { Messages } from "../types/messages";
import { State } from "../types/store";

export const messagesListSelector = (state: State): Messages => state.messages.list;
