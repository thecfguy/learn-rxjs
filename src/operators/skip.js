/**
 * Emits only the first count values emitted by source Observable.
 * */

import { interval } from "rxjs";
import { skip } from "rxjs/operators";

const skipOperator = () => {
  //#region #1
  const skipThree = interval(1000).pipe(skip(3));
  skipThree.subscribe((value) =>
    console.log(`Value ${value} generated at ${new Date()}`)
  );
  //#endregion
};

export default skipOperator;
