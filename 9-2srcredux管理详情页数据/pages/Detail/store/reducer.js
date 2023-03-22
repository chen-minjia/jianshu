import {fromJS} from Immutable;
let defaultState= fromJS({
  title:"张小龙：好的产品是优美的",
  content:'<img src="https://pic.leetcode-cn.com/1643202986-UeBHaT-image.png" alt="" /><p>用户在使用产品的过程中其实就是在和一个“新物种”进行交流，而要想做到美的产品，除了在工作的积累，我还要求团队的产品经理们一定要学会在生活中懂美。</p><p><b>你自己的生活都无法发现美，怎么能够做出美的产品设计呢？</b></p><p>我们在生活里的朋友圈、穿衣打扮、家庭装修等等，产品经理都要能够学会审美，才能辨别自己做的产品设计是不是美。</p><p>站在实际工作里，我们怎么确保自己的产品的设计美的呢？有什么技巧可以确保自己产品设计至少让用户不感受到奇怪呢？</p>'
});
export default (prestate=defaultState,action)=>{
  switch(action.type){
    // case :
    default:
      return state;
  }
}