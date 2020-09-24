import { Rate } from "../types/rate";
import { State } from "../types/store";

export const rateDataSelector = (state: State): Rate | undefined => state.rate.data;
