/**
 * Delays the emission of items from the source Observable by a given timeout or until a given Date.
 * It won't loose any emission value just delay by time or specified date.
 * */

import { interval } from "rxjs";

const intervalObservable = () => {
  //#region #1
  //   const numbers = interval(1000);
  //   numbers.subscribe((value) =>
  //     console.log(`Value ${value} generated at ${new Date()}`)
  //   );
  //#endregion
  //#region #2
  //   const numbers = interval(
  //     (function () {
  //       let duration = parseInt(Math.random() * 3000);
  //       console.log(`Duration ${duration}`);
  //       return duration;
  //     })()
  //   );
  //   numbers.subscribe((value) =>
  //     console.log(`Value ${value} generated at ${new Date()}`)
  //   );
  //#endregion
};

export default intervalObservable;
