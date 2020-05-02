import { range, asyncScheduler, queueScheduler, asapScheduler } from "rxjs";

const rangeObservable = () => {
  //#region #1
  //   const numbers = range(1, 10);
  //   numbers.subscribe((value) => console.log(`Value ${value}`));
  //#endregion

  //#region #2
  //   const numbers = range(3);
  //   numbers.subscribe((value) => console.log(`Value ${value}`));
  //#endregion

  //#region #3
  const asyncNumbers = range(1, 4, asyncScheduler);
  const asapNumbers = range(1, 4, asapScheduler);
  const queueNumbers = range(1, 40000, queueScheduler);
  const numbers = range(1, 4);
  asyncNumbers.subscribe((value) => console.log(`Value Async ${value}`));
  asapNumbers.subscribe((value) => console.log(`Value Asap ${value}`));
  numbers.subscribe((value) => console.log(`Value ${value}`));
  queueNumbers.subscribe((value) => console.log(`Value Queue ${value}`));
  //#endregion
};

export default rangeObservable;
