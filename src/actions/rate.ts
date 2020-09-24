import { UPDATE_RATE } from "../actionsTypes/rate";
import { Rate, UpdateRateAction } from "../types/rate";

export const updateRate = (rate: Rate): UpdateRateAction => ({
    type: UPDATE_RATE,
    payload: rate,
});
