import { ADD_SERVICE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGES } from "../actionsTypes/messages";

interface MessageContent {
    source: string;
    amount: number;
}

export interface MessageData {
    text: string;
    canDelete: boolean;
    btcAmount?: number;
    messageType: string;
    messageContent: string | MessageContent[];
    cannotAddNew?: boolean;
}

export interface Message extends MessageData {
    id: number;
}

export type Messages = Message[];

export interface UpdateMessagesAction {
    type: typeof UPDATE_MESSAGES;
    payload: Messages;
}

export interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE;
    payload: { id: number };
}

export interface AddServiceMessageAction {
    type: typeof ADD_SERVICE_MESSAGE;
    payload: { message: MessageData; index: number };
}
