/**
 * Emits only the first count values emitted by source Observable.
 * */

import { interval } from "rxjs";
import { take } from "rxjs/operators";

const takeOperator = () => {
  //#region #1
  const takeFiveOnly = interval(1000).pipe(take(5));
  takeFiveOnly.subscribe((value) =>
    console.log(`Value ${value} generated at ${new Date()}`)
  );
  //#endregion
};

export default takeOperator;
