/**
 * Delays the emission of items from the source Observable by a given timeout or until a given Date.
 * It won't loose any emission value just delay by time or specified date.
 * */

import { range, interval, asyncScheduler, queueScheduler } from "rxjs";
import { delay, take } from "rxjs/operators";

const delayOperator = () => {
  //#region #1
  // const source = range(1, 5);
  // const delayedSource = source.pipe(delay(2000));
  // console.log("Subscribed", new Date());
  // delayedSource.subscribe((value) => console.log(`${value} emitted`));
  //#endregion
  //
  //#region #2
  const source = interval(1000).pipe(take(4));
  const date = new Date(new Date().getTime() + 5000);
  const delayedSource = source.pipe(delay(date));
  console.log(`Value must be emmited at or after ${date}`);
  delayedSource.subscribe((value) => console.log(`${value} emitted`));
  //#endregion
};

export default delayOperator;
