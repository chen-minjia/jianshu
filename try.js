let arr = [1,-1,2,5,3,-3];
function findOther(arr){
  let map = new Map();
  let count = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
      map.set(-arr[i],arr[i]);// {-1:1,-2:2,-5:5,-3:3}
    }
  }
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0 && map.has(arr[i])){
      count++;
    }
  }
  return count;
}