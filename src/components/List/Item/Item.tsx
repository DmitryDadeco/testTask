import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

import { addServiceMessage, deleteMessage } from "../../../actions/messages";
import { messageToInsert } from "../../../data-mocks/messages";
import { Message } from "../../../types/messages";
import { Rate } from "../../../types/rate";
import "./Item.css";
import { getTypeColor } from "./utils/getTypeColor";
import { prepareUSDAmount } from "./utils/getUSDAmount";

const SPACES = 4;

interface Props {
    message: Message;
    rate: Rate;
    index: number;
}

export const Item = ({ message, rate, index }: Props): ReactElement => {
    const dispatch = useDispatch();
    const amount = prepareUSDAmount(rate.bpi.USD.rate_float, message.btcAmount);
    const messageContent =
        typeof message.messageContent === "object"
            ? JSON.stringify(message.messageContent, undefined, SPACES)
            : message.messageContent;
    const onDelete = () => {
        dispatch(deleteMessage(message.id));
    };
    const onAdd = () => {
        dispatch(addServiceMessage(messageToInsert, index));
    };

    return (
        <div
            className="list__item"
            style={{
                backgroundColor: getTypeColor(message.messageType),
            }}
        >
            <p>text: {message.text}</p>
            <p>messageContent: {messageContent}</p>
            {amount && <p>{amount}</p>}
            <div>
                {message.canDelete && <button onClick={onDelete}>Delete</button>}
                {!message.cannotAddNew && <button onClick={onAdd}>Add service message</button>}
            </div>
        </div>
    );
};
