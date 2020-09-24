import { useState, useEffect } from "react";
import { interval } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { useDispatch } from "react-redux";

import { updateRate } from "../actions/rate";

const fetchUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";
const poolingInterval = 10000;

export const useRate = (): boolean => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        interval(poolingInterval)
            .pipe(
                mergeMap(() =>
                    fetch(fetchUrl).then((data) => {
                        setIsLoaded(true);
                        return data.json();
                    }),
                ),
            )
            .subscribe((data) => {
                dispatch(updateRate(data));
            });
    }, [dispatch]);

    return isLoaded;
};
