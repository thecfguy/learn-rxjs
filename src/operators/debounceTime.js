/**
 * Start timer once receive from source and hold for given delay time,
 * During wait period received new value will reset timer and wait delay time.
 * ***
 * Emits a value from the source Observable only after a particular time span has passed without
 * another source emission.
 * */

import { Observable, fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

const debounceTimeOperator = () => {
  //#region #1
  //   const clicks = fromEvent(document, "mousemove");
  //   const result = clicks.pipe(debounceTime(1000));
  //   result.subscribe((x) => console.log(x));
  //#endregion

  // #region #2
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
  }).pipe(debounceTime(1000));
  timelineGenerator.subscribe((x) =>
    console.log(
      `Value observe ${x} - after ${
        new Date().getTime() - x
      } ms from last generated`
    )
  );
  //#endregion
};

export default debounceTimeOperator;
