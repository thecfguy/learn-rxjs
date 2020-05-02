/**
 * Ignores source values for a duration determined by another Observable,
 * then emits the most recent value from the source Observable,
 * then repeats this process.
 * */

import { Observable, fromEvent, interval } from "rxjs";
import { throttle } from "rxjs/operators";

const throttleOperator = () => {
  //#region #1

  // const mousemoves = fromEvent(document, "mousemove");
  // const result = mousemoves.pipe(
  //   throttle((ev) => interval(Math.random() * 4000))
  // );
  // result.subscribe((x) => console.log(x.clientX));

  //#endregion

  // #region #2
  let i = 0;
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
    }, 1000);

    setTimeout(() => {
      generateSubscribeValue();
    }, 2000);

    setTimeout(() => {
      generateSubscribeValue();
    }, 3000);

    setTimeout(() => {
      generateSubscribeValue();
    }, 4000);

    setTimeout(() => {
      generateSubscribeValue();
    }, 5000);

    setTimeout(() => {
      generateSubscribeValue();
    }, 6000);
  }).pipe(throttle((ev) => interval(1000)));

  timelineGenerator.subscribe((x) =>
    console.log(
      `Value observe ${x} - after ${
        new Date().getTime() - x
      } ms from last generated`
    )
  );
  //#endregion

  // #region #3

  // let timelineGenerator = new Observable((subscriber) => {
  //   let noofCall = 0;
  //   const generateSubscribeValue = () => {
  //     let start = new Date().getTime();
  //     noofCall = noofCall + 1;
  //     console.log(`value ${noofCall} ${start}`);
  //     subscriber.next(start);
  //   };

  //   generateSubscribeValue();

  //   setTimeout(() => {
  //     generateSubscribeValue();
  //   }, 2000);

  //   setTimeout(() => {
  //     generateSubscribeValue();
  //   }, 5000);

  //   setTimeout(() => {
  //     generateSubscribeValue();
  //   }, 5200);

  //   setTimeout(() => {
  //     generateSubscribeValue();
  //   }, 5400);

  //   setTimeout(() => {
  //     generateSubscribeValue();
  //   }, 5600);

  //   setTimeout(() => {
  //     generateSubscribeValue();
  //   }, 8000);
  // }).pipe(
  //   throttle(1000, asyncScheduler, {
  //     leading: true,
  //     trailing: true,
  //   })
  // );

  // timelineGenerator.subscribe((x) =>
  //   console.log(
  //     `Value observe ${x} - after ${
  //       new Date().getTime() - x
  //     } ms from last generated`
  //   )
  // );
  //#endregion
};

export default throttleOperator;
