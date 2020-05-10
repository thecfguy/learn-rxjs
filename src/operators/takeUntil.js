import { interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

const takeUntilOperator = () => {
  //#region #1
  const source = interval(1000);
  const notifier = interval(5000);

  const result = source.pipe(takeUntil(notifier));
  result.subscribe((value) => console.log(`Emitted value ${value}`));
  //#endregion
};

export default takeUntilOperator;
