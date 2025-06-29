function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

async function runWithPromise() {

    const msg1=await wait(3000);
  /*
  wait(3000)
    .then((msg) => {
        */

      console.log(msg1);
      console.log("FUNCTION-02: End (promise)");
    };


console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();

