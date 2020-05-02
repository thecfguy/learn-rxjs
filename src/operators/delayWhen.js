/**
 * Delays the emission of items based on your own observable also it take another argument which allow.
 * to entire subscription delayed.
 * */

import { fromEvent, interval } from "rxjs";
import { delayWhen } from "rxjs/operators";

const delayWhenOperator = () => {
  //#region #1
  // const clicks = fromEvent(document, "click");
  // const delayedClicks = clicks.pipe(
  //   delayWhen((event) => interval(Math.random() * 5000))
  // );
  // delayedClicks.subscribe((x) => console.log(x));
  //#endregion

  //#region #2
  const clicks2 = fromEvent(document, "click");
  const delayedClicks = clicks2.pipe(
    delayWhen((event) => interval(Math.random() * 1000), interval(5000))
  );
  console.log(`Subscribed at ${new Date()}`);
  delayedClicks.subscribe((x) =>
    console.log(`Clicked emitted at position ${x.screenX} at ${new Date()}`)
  );
  //#endregion
};

export default delayWhenOperator;
