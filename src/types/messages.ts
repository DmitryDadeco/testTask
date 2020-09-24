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
