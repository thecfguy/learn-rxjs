/**
 * Observe source value, emit observed value,
 * ignore next value for given interval
 * */

import { Observable, fromEvent } from "rxjs";
import { auditTime } from "rxjs/operators";

const auditTimeOperator = () => {
  //#region Audit Time with Mouse Move

  // const clicks = fromEvent(document, "mousemove");
  // const result = clicks.pipe(auditTime(1000));
  // result.subscribe((x) => console.log(x));

  //#endregion

  // #region Audit Time #1

  let timelineGenerator = new Observable((subscriber) => {
    let noofCall = 0;
    const generateSubscribeValue = () => {
      let start = new Date().getTime();
      noofCall = noofCall + 1;
      console.log(`value ${noofCall} ${start}`);
      subscriber.next(start);
    };

    generateSubscribeValue();

    setTimeout(() => {
      generateSubscribeValue();
    }, 2000);

    setTimeout(() => {
      generateSubscribeValue();
    }, 5000);

    setTimeout(() => {
      generateSubscribeValue();
    }, 5200);

    setTimeout(() => {
      generateSubscribeValue();
    }, 5400);

    setTimeout(() => {
      generateSubscribeValue();
    }, 5600);

    setTimeout(() => {
      generateSubscribeValue();
    }, 8000);
  }).pipe(auditTime(1000));

  timelineGenerator.subscribe((x) =>
    console.log(
      `Value observe ${x} - after ${
        new Date().getTime() - x
      } ms from last generated`
    )
  );
  //#endregion
};

export default auditTimeOperator;
