import React, { useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateMessages } from "../../actions/messages";
import { getMessagesList } from "../../api/fakeApi";
import { messagesListSelector } from "../../selectors/messages";
import { Rate } from "../../types/rate";
import { Item } from "./Item/Item";
import { useMessagesList } from "../../hooks/messages";

interface Props {
    rate: Rate;
}

export const List = ({ rate }: Props): ReactElement => {
    const dispatch = useDispatch();
    const messagesList = useSelector(messagesListSelector);
    const isLoaded = useMessagesList();

    useEffect(() => {
        getMessagesList().subscribe((data) => {
            dispatch(updateMessages(data));
        });
    }, [dispatch]);

    return (
        <section>
            {isLoaded ? (
                <>
                    {messagesList.map((message, index) => (
                        <Item key={message.id} message={message} rate={rate} index={index} />
                    ))}
                </>
            ) : (
                "Loading messages..."
            )}
        </section>
    );
};
