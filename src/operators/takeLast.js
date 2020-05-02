import { range, Observable, interval } from "rxjs";
import { takeLast } from "rxjs/operators";

const takeLastOperator = () => {
  //#region #1
  //   const many = range(1, 100);
  //   const lastThree = many.pipe(takeLast(3));
  //   lastThree.subscribe((value) =>
  //     console.log(`Value ${value} generated at ${new Date()}`)
  //   );
  //#endregion
  //#region #2
  //   const observable = new Observable((subscriber) => {
  //     setTimeout(() => subscriber.next(1), 1000);
  //     setTimeout(() => subscriber.next(2), 2000);
  //     setTimeout(() => subscriber.next(3), 3000);
  //     setTimeout(() => subscriber.next(4), 4000);
  //     setTimeout(() => subscriber.next(5), 5000);
  //     setTimeout(() => subscriber.next(6), 6000);
  //     setTimeout(() => subscriber.complete(), 6000);
  //   });
  //   const lastThree = observable.pipe(takeLast(3));
  //   lastThree.subscribe((value) =>
  //     console.log(`Value ${value} generated at ${new Date()}`)
  //   );
  //#endregion
  //#region #3
  //   const numbers = new interval(1000);
  //   const lastThree = numbers.pipe(takeLast(3));
  //   lastThree.subscribe((value) =>
  //     console.log(`Value ${value} generated at ${new Date()}`)
  //   );
  //#endregion
};

export default takeLastOperator;
