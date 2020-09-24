import { UpdateRateAction } from "../actions/rate";
import { UPDATE_RATE } from "../actionsTypes/rate";
import { Rate } from "../types/rate";

export interface RateState {
    data?: Rate;
}

export const rateInitialState: RateState = {};

export const rateReducer = (state = rateInitialState, action: UpdateRateAction): RateState => {
    switch (action.type) {
        case UPDATE_RATE:
            return action.payload.time.updated === state.data?.time.updated
                ? state
                : { ...state, data: action.payload };
        default:
            return state;
    }
};
