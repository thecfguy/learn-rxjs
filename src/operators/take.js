/**
 * Emits only the first count values emitted by source Observable.
 * */

import { interval } from "rxjs";
import { take } from "rxjs/operators";

const takeOperator = () => {
  //#region #1
  const source = interval(1000);
  const result = source.pipe(take(5));
  result.subscribe((value) => console.log(`Value ${value} generated.`));
  //#endregion
};

export default takeOperator;
