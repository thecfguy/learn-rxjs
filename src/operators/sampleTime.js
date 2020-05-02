/**
 * Periodically looks at the source Observable and emits whichever value it has most recently emitted
 * since the previous sampling, unless the source has not emitted anything since the previous sampling
 * Like timer doesn't start/reset on very emits (like audit). It ensure you will receive sample duration
 * if continously emitting value.
 * */

import { Observable, fromEvent } from "rxjs";
import { sampleTime } from "rxjs/operators";

const sampleTimeOperator = () => {
  //#region #1
  //   const mousemoves = fromEvent(document, "mousemove");
  //   const result = mousemoves.pipe(sampleTime(1000));
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
    }, 1500);
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
    setTimeout(() => {
      generateSubscribeValue();
    }, 9900);
  }).pipe(sampleTime(1000));
  timelineGenerator.subscribe((x) =>
    console.log(
      `Value observe ${x} - after ${
        new Date().getTime() - x
      } ms from last generated`
    )
  );
  //#endregion
};

export default sampleTimeOperator;
