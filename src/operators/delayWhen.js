/**
 * Delays the emission of items based on your own observable also it take another argument which allow.
 * to entire subscription delayed.
 * */

import { interval } from "rxjs";
import { delayWhen, take } from "rxjs/operators";

const delayWhenOperator = () => {
  //#region #1
  // const source = interval(500);

  // const delayDurationSelector = (value) => {
  //   const duration = parseInt(500 + Math.random() * 3000);
  //   console.log(`${value} delayed for ${duration} ms`);
  //   return interval(duration);
  // };

  // const result = source.pipe(delayWhen(delayDurationSelector), take(5));
  // result.subscribe((value) =>
  //   console.log(`%c Value emitted ${value}`, "color: #bada55")
  // );
  //#endregion

  //#region #2
  const source = interval(1000);
  const delayDurationSelector = (value) => interval(1000);
  const subscriptionDelay = interval(2000);
  const result = source.pipe(
    delayWhen(delayDurationSelector, subscriptionDelay),
    take(5)
  );
  console.log(`Subscribed to result`);
  result.subscribe((value) =>
    console.log(`%c Value emitted ${value}`, "color: #bada55")
  );
  //#endregion
};

export default delayWhenOperator;
