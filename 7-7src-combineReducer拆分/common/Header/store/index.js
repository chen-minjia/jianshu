// 这个文件 解决combineReducer 引入 headerReducer 路径过长的问题
// 通过引入 store/index.js 间接地引入 headerReducer
import reducer from './reducer';
export {reducer}