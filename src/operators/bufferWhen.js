import { interval } from "rxjs";
import { bufferWhen, take } from "rxjs/operators";

const bufferWhenOperator = () => {
  //#region #1
  // const source = interval(200);
  // const closingSelector = () => interval(1000);

  // const result = source.pipe(bufferWhen(closingSelector), take(5));

  // result.subscribe((value) => {
  //   console.log(value);
  // });
  //#endregion

  //#region #2
  const source = interval(200);

  const closingSelector = () => {
    let delay = parseInt(1000 + Math.random() * 4000);
    console.log(`Delay of ${delay}`);
    return interval(delay);
  };
  const result = source.pipe(bufferWhen(closingSelector), take(5));

  result.subscribe((value) => {
    console.log(value);
  });
  //#endregion
};

export default bufferWhenOperator;
