// console.log("Hello G");

// setTimeout(function () {
//   console.log("From inside async fn");
// }, 2000);

// let a = 0;
// for (let i = 0; i < 10; i++) {
//   a = a + 1;
// }

// console.log(a);
function kiratAsyncFunction(){
  
let p = new Promise(function (resolve) {
  resolve("hi there");
});
return p;
}
const value = kiratAsyncFunction();
value.then(function () {
  console.log("hi there2");
});
