import { interval } from "rxjs";

const intervalObservable = () => {
  //#region #1
  // const numbers = interval(1000);

  // numbers.subscribe((value) =>
  //   console.log(`Value ${value} generated at ${new Date()}`)
  // );
  //#endregion

  //#region #2
  const numbers = interval(
    (function () {
      let duration = parseInt(Math.random() * 3000);
      console.log(`Duration ${duration}`);
      return duration;
    })()
  );

  numbers.subscribe((value) =>
    console.log(`Value ${value} generated at ${new Date()}`)
  );
  //#endregion
};

export default intervalObservable;
