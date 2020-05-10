import { range, Observable, interval } from "rxjs";
import { takeLast } from "rxjs/operators";

const takeLastOperator = () => {
  //#region #1
  // const source = range(1, 100);
  // const result = source.pipe(takeLast(3));
  // result.subscribe((value) => console.log(`Emitted Value: ${value}`));
  //#endregion
  //#region #2
  // const source = new Observable((subscriber) => {
  //   setTimeout(() => subscriber.next(1), 500);
  //   setTimeout(() => subscriber.next(2), 1000);
  //   setTimeout(() => subscriber.next(3), 1500);
  //   setTimeout(() => subscriber.next(4), 2000);
  //   setTimeout(() => subscriber.next(5), 2500);
  //   setTimeout(() => subscriber.next(6), 3000);
  //   setTimeout(() => subscriber.complete(), 4000);
  // });
  // const result = source.pipe(takeLast(3));
  // console.log("Subscribed to result");
  // result.subscribe((value) => console.log(`Emitted Value: ${value} `));
  //#endregion

  //#region #3
  const source = new interval(1000);
  const result = source.pipe(takeLast(3));
  result.subscribe((value) => console.log(`Emitted Value: ${value}`));
  //#endregion
};

export default takeLastOperator;
