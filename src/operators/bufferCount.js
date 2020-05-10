import { range } from "rxjs";
import { bufferCount } from "rxjs/operators";

const bufferCountOperator = () => {
  //#region #1
  const source = range(1, 20);
  const bufferSize = 2,
    startBufferEvery = null;

  // const bufferSize = 3,
  //   startBufferEvery = 3;
  // const bufferSize = 2,
  //   startBufferEvery = 4;
  // const bufferSize = 6,
  //   startBufferEvery = 2;
  // const bufferSize = 0,
  //   startBufferEvery = 2;

  const result = source.pipe(bufferCount(bufferSize, startBufferEvery));

  result.subscribe((value) => {
    console.log(value);
  });
  //#endregion
};

export default bufferCountOperator;
