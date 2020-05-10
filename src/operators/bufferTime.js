import { interval, range, asyncScheduler } from "rxjs";
import { bufferTime, take } from "rxjs/operators";

const bufferTimeOperator = () => {
  //#region #1
  // const source = interval(500).pipe(take(20));
  // const bufferTimeSpan = 1500;

  // const result = source.pipe(bufferTime(bufferTimeSpan));

  // result.subscribe((value) => {
  //   console.log(value);
  // });
  //#endregion

  //#region #2
  const source = range(1, 10, asyncScheduler);
  const bufferTimeSpan = 50;

  const result = source.pipe(bufferTime(bufferTimeSpan));

  result.subscribe((value) => {
    console.log(value);
  });
  //#endregion
};

export default bufferTimeOperator;
