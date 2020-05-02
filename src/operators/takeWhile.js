import { range, Observable, interval } from "rxjs";
import { takeWhile } from "rxjs/operators";

const takeWhileOperator = () => {
  //#region #1
  const numbers = interval(1000);
  const result = numbers.pipe(
    takeWhile((value, index) => {
      console.log(value, index);
      return value < 4;
    })
  );

  result.subscribe((value) =>
    console.log(`Value ${value} generated at ${new Date()}`)
  );
  //#endregion
};

export default takeWhileOperator;
