/**
 * Production Entry Point
 * ======================
 * 
 * In order to run this script you need to build the solution
 * into the `/dist` folder by running `yarn build`
 * 
 */

"use strict";

require("@babel/polyfill");

require("./build-ssr/boot").default().catch(function (err) {
  console.log('*** BOOT: Fatal Error');
  console.log(err);
});
