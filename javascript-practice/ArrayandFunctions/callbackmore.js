function waitWithCallback(ms, callback) {
    setTimeout(() => {
      callback(`⏳ Waited ${ms}ms (callback)`);
    }, ms);
   }
   
   
   console.log(" Function 01-Start (callback)");
   
   
   waitWithCallback(3000, (msg) => {
    console.log('' +msg);
    console.log(" Function 02- End (callback)");
   });

   console.log(' Function 03- Stop Callback')
   