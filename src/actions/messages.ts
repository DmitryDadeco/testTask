import { ADD_SERVICE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGES } from "../actionsTypes/messages";
import {
    AddServiceMessageAction,
    DeleteMessageAction,
    MessageData,
    Messages,
    UpdateMessagesAction,
} from "../types/messages";

export const updateMessages = (messages: Messages): UpdateMessagesAction => ({
    type: UPDATE_MESSAGES,
    payload: messages,
});

export const deleteMessage = (id: number): DeleteMessageAction => ({
    type: DELETE_MESSAGE,
    payload: { id },
});

export const addServiceMessage = (
    message: MessageData,
    index: number,
): AddServiceMessageAction => ({
    type: ADD_SERVICE_MESSAGE,
    payload: { message, index },
});
