import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { useRate } from "./utils/useRate";
import { List } from "../List/List";
import { rateDataSelector } from "../../selectors/rate";

export const App = (): ReactElement => {
    const isReadyToRender = useRate();
    const rateData = useSelector(rateDataSelector);

    return isReadyToRender && rateData ? (
        <List rate={rateData} />
    ) : (
        <p>We loading rate for u. Wait a bit</p>
    );
};
