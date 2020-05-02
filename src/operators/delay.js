/**
 * Delays the emission of items from the source Observable by a given timeout or until a given Date.
 * It won't loose any emission value just delay by time or specified date.
 * */

import { Observable, fromEvent, asyncScheduler, queueScheduler } from "rxjs";
import { delay } from "rxjs/operators";

const delayOperator = () => {
  //#region #1
  //   const clicks = fromEvent(document, "click");
  //   const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
  //   delayedClicks.subscribe((x) => console.log(x));
  //#endregion

  //#region #2
  //   const clicks = fromEvent(document, "click");
  //   const date = new Date(new Date().getTime() + 5000); // date afer 5 seconds
  //   const delayedClicks = clicks.pipe(delay(date, queueScheduler)); // click emitted only after that date
  //   delayedClicks.subscribe((x) => console.log(x));
  //#endregion

  // #region #3
  //   let timelineGenerator = new Observable((subscriber) => {
  //     let noofCall = 0;
  //     const generateSubscribeValue = () => {
  //       let start = new Date().getTime();
  //       noofCall = noofCall + 1;
  //       console.log(`value ${noofCall} ${start}`);
  //       subscriber.next(start);
  //     };
  //     generateSubscribeValue();
  //     setTimeout(() => {
  //       generateSubscribeValue();
  //     }, 2000);
  //     setTimeout(() => {
  //       generateSubscribeValue();
  //     }, 5000);
  //     setTimeout(() => {
  //       generateSubscribeValue();
  //     }, 5200);
  //     setTimeout(() => {
  //       generateSubscribeValue();
  //     }, 5400);
  //     setTimeout(() => {
  //       generateSubscribeValue();
  //     }, 5600);
  //     setTimeout(() => {
  //       generateSubscribeValue();
  //     }, 8000);
  //   }).pipe(delay(1000));

  //   timelineGenerator.subscribe((x) =>
  //     console.log(
  //       `Value observe ${x} - after ${
  //         new Date().getTime() - x
  //       } ms from last generated`
  //     )
  //   );
  //#endregion

  // #region #4
  const inFuture = new Date(new Date().getTime() + 10000); //10 seconds date

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
  }).pipe(delay(inFuture));

  timelineGenerator.subscribe((x) =>
    console.log(
      `Value observe ${x} - after ${
        new Date().getTime() - x
      } ms from last generated`
    )
  );

  //#endregion
};

export default delayOperator;
