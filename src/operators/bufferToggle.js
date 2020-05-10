import { interval, queueScheduler, asapScheduler } from "rxjs";
import { bufferToggle, take } from "rxjs/operators";

const bufferToggleOperator = () => {
  //#region #1
  //Source:  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
  //Opening:           1            2                 3
  //Closing:               1              2                  3
  // const source = interval(100);
  // const opening = interval(600);
  // const closingSelector = (i) => interval(200);
  // const result = source.pipe(bufferToggle(opening, closingSelector), take(5));
  // result.subscribe((value) => {
  //   console.log(value);
  // });
  //#endregion

  //#region #2
  // const source = interval(100);
  // const opening = interval(100);
  // const closingSelector = (i) => interval(300);
  // const result = source.pipe(bufferToggle(opening, closingSelector), take(4));

  // result.subscribe((value) => {
  //   console.log(value);
  // });
  //#endregion

  //#region #3
  //Source:  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
  //Opening:     0     1     2      3        4
  //Closing:     0       1        2          3            4
  const source = interval(100, queueScheduler);
  const opening = interval(300);
  const closingSelector = (i) => {
    console.log(i);
    return interval(i * 100);
  };
  const result = source.pipe(bufferToggle(opening, closingSelector), take(5));
  result.subscribe((value) => {
    console.log(value);
  });
  //#endregion
};

export default bufferToggleOperator;
