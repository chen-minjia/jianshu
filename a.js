let str = "aabcde";
let ress = 0;
//字符串包含几个不同的字母：
function diff(str){
  let res = [];
  for(let i=0;i<str.length;i++){
    if(res.includes(str[i])){
      continue;
    }else{
      res.push(str[i]);
    }
  }
  return res.length;
}
for(let i=0;i<str.length;i++){
  for(let j=i+1;j<str.length+1;j++){
    let subStr = str.slice(i,j);
    if(diff(subStr)<=k){//改成k
      ress = Math.max(ress,subStr.length)
    } 
  }
}
console.log(ress);