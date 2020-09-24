import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

import { shuffledMessageList } from "../data-mocks/messages";
import { Messages } from "../types/messages";

export const getMessagesList = (): Observable<Messages> => of(shuffledMessageList).pipe(delay(500));
