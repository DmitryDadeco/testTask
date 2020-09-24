import { ADD_SERVICE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGES } from "../actionsTypes/messages";
import { MessageData, Messages } from "../types/messages";

export interface UpdateMessagesAction {
    type: typeof UPDATE_MESSAGES;
    payload: Messages;
}

export const updateMessages = (messages: Messages): UpdateMessagesAction => ({
    type: UPDATE_MESSAGES,
    payload: messages,
});

export interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE;
    payload: { id: number };
}

export const deleteMessage = (id: number): DeleteMessageAction => ({
    type: DELETE_MESSAGE,
    payload: { id },
});

export interface AddServiceMessageAction {
    type: typeof ADD_SERVICE_MESSAGE;
    payload: { message: MessageData; index: number };
}

export const addServiceMessage = (
    message: MessageData,
    index: number,
): AddServiceMessageAction => ({
    type: ADD_SERVICE_MESSAGE,
    payload: { message, index },
});
