import { range, Observable, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

const takeUntilOperator = () => {
  //#region #1
  const numbers = interval(1000);
  const notifier = interval(5000);
  const result = numbers.pipe(takeUntil(notifier));
  result.subscribe((value) =>
    console.log(`Value ${value} generated at ${new Date()}`)
  );
  //#endregion
};

export default takeUntilOperator;
