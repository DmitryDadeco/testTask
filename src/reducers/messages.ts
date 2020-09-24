import { ADD_SERVICE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGES } from "../actionsTypes/messages";
import {
    Messages,
    AddServiceMessageAction,
    DeleteMessageAction,
    UpdateMessagesAction,
} from "../types/messages";

export interface MessagesState {
    list: Messages;
}

export const messagesInitialState: MessagesState = {
    list: [],
};

export const messagesReducer = (
    state = messagesInitialState,
    action: UpdateMessagesAction | DeleteMessageAction | AddServiceMessageAction,
): MessagesState => {
    switch (action.type) {
        case UPDATE_MESSAGES:
            return { ...state, list: action.payload };
        case DELETE_MESSAGE: {
            const list = state.list.filter((item) => action.payload.id !== item.id);

            return { ...state, list };
        }
        case ADD_SERVICE_MESSAGE: {
            const list = state.list.reduce<Messages>(
                (newList, message, index) =>
                    action.payload.index === index
                        ? [
                              ...newList,
                              message,
                              {
                                  id: new Date().getTime(),
                                  cannotAddNew: true,
                                  ...action.payload.message,
                              },
                          ]
                        : [...newList, message],
                [],
            );

            return { ...state, list };
        }
        default:
            return state;
    }
};
