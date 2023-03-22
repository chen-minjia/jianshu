let line1=readline();
let line1_arr = line1.split(" ");
let k = parseInt(line1_arr[1]);
let str = readline();

// let ress = 0;
// //字符串包含几个不同的字母：
// function diff(str){
//   let res = [];
//   for(let i=0;i<str.length;i++){
//     if(res.includes(str[i])){
//       continue;
//     }else{
//       res.push(str[i]);
//     }
//   }
//   return res.length;
// }
// for(let i=0;i<str.length;i++){
//   for(let j=i+1;j<str.length+1;j++){
//     let subStr = str.slice(i,j);
//     if(diff(subStr)<=k){
//       ress = Math.max(ress,subStr.length)
//     } 
//   }
// }
// console.log(ress);
// 判断字符串含有的字母种数
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

let dp =[];
dp.push(str[0]);
let res = 1;//最长子串的长度；
for(let i=1;i<str.length;i++){
  if(dp[i-1].includes(str[i])){// 如果前一个子串中包含str[i]
    dp[i] = dp[i-1]+str[i];
  }else{//如果前一个子串不包含str[i]
    if(diff(dp[i-1])<k){//如果没达到最多种类
      dp[i] = dp[i-1]+str[i];
    }else{//如果达到了最多种类
      //删除第一个出现的字母;
      let tarIndex = 0;
      for(let j=0;j<dp[i-1].length;j++){
        if(dp[i-1][j]==dp[i-1][0]){
          tarIndex=j;
        }
      }
      if(tarIndex==dp[i-1].length-1){//如果j是 dp[i-1]末尾
        dp[i] = str[i];
      }else{
        dp[i] = dp[i-1].slice(tarIndex+1)+str[i];
      }
    }
  }
  res = Math.max(dp[i].length,res);
}

console.log(res)

