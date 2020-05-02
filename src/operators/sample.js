/**
 * Emits the most recently emitted value from the source Observable whenever another Observable, the notifier, emits.
 * */

import { Observable, fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const sampleOperator = () => {
  //#region #1
  // const seconds = interval(1000);
  // const mousemoves = fromEvent(document, "mousemove");
  // const result = mousemoves.pipe(sample(seconds));
  // result.subscribe((x) => console.log(x));
  //#endregion

  // #region #2
  let randomTimeGenerator = new Observable((subscriber) => {
    let noofCall = 0;
    const generateSubscribeValue = () => {
      noofCall++;
      console.log(`Sample value generated ${noofCall}`);
      subscriber.next("Pulse");
    };
    for (let i = 0; i < 5; i++) {
      setTimeout(function () {
        generateSubscribeValue();
      }, Math.floor(Math.random() * 8000));
    }
  });

  let timelineGenerator = new Observable((subscriber) => {
    let noofCall = 0;
    const generateSubscribeValue = () => {
      let start = new Date().getTime();
      noofCall = noofCall + 1;
      console.log(`Source value ${noofCall} ${start}`);
      subscriber.next(start);
    };

    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(1000));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(2000));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(5000));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(5200));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(5400));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(5600));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(5700));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(5700));
    setTimeout(function () {
      generateSubscribeValue();
    }, Math.floor(10000));
  }).pipe(sample(randomTimeGenerator));
  timelineGenerator.subscribe((x) =>
    console.log(
      `Value observe ${x} - after ${
        new Date().getTime() - x
      } ms from last generated`
    )
  );
  //#endregion
};

export default sampleOperator;
