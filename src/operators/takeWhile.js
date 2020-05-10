import { range, Observable, interval } from "rxjs";
import { takeWhile } from "rxjs/operators";

const takeWhileOperator = () => {
  //#region #1
  const source = range(10, 20);

  const predicate = (value, index) => {
    console.log(value, index);
    return value < 15;
  };
  const result = source.pipe(takeWhile(predicate, true));

  result.subscribe((value) =>
    console.log(`%c Emitted value: ${value}`, "color:#bada55")
  );
  //#endregion
};

export default takeWhileOperator;
