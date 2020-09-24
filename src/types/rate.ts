import { UPDATE_RATE } from "../actionsTypes/rate";

export interface Rate {
    time: {
        updated: string;
        updatedISO: string;
        updateduk: string;
    };
    disclaimer: string;
    bpi: {
        USD: {
            code: string;
            rate: string;
            description: string;
            rate_float: number;
        };
    };
}

export interface UpdateRateAction {
    type: typeof UPDATE_RATE;
    payload: Rate;
}
