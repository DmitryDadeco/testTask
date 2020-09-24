import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateMessages } from "../../../actions/messages";
import { getMessagesList } from "../../../api/fakeApi";

export const useList = (): boolean => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getMessagesList().subscribe((data) => {
            dispatch(updateMessages(data));
            setIsLoaded(true);
        });
    }, [dispatch]);

    return isLoaded;
};
