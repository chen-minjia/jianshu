function a(i){
  let value=0;
  function b(){
    value+=i;
    console.log(value)
    const msg = `Current value is ${value}`
    return function c(){
      console.log(msg);
    }
  }
  return b;
}
let lon = a(1);
let log = lon();// 1
lon();// 2
lon();// 3
log();// Current value is 1

