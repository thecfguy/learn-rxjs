import { interval } from "rxjs";
import { buffer } from "rxjs/operators";

const bufferOperator = () => {
  //#region #1
  const source = interval(200);
  const closingNotifier = interval(1000);
  const result = source.pipe(buffer(closingNotifier));

  result.subscribe((value) => {
    console.log(value, `Value ${value} emitted at ${new Date()}`);
  });
  //#endregion

  //#region #2
  // const source = interval(3000);
  // const closingNotifier = interval(1000);
  // const result = source.pipe(buffer(closingNotifier));
  // result.subscribe((value) => {
  //   console.log(value, `Value ${value} emitted at ${new Date()}`);
  // });
  //#endregion
};

export default bufferOperator;
