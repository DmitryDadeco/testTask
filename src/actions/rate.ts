import { UPDATE_RATE } from "../actionsTypes/rate";
import { Rate } from "../types/rate";

export interface UpdateRateAction {
    type: typeof UPDATE_RATE;
    payload: Rate;
}

export const updateRate = (rate: Rate): UpdateRateAction => ({
    type: UPDATE_RATE,
    payload: rate,
});
