import { combineReducers } from 'redux-immutable'
// import {A as B} 重命名模块，防止冲突。
import {reducer as headerReducer} from '../common/Header/store'
import {reducer as homeReducer} from '../pages/Home/store'
const reducer= combineReducers({
  header:headerReducer,
  home:homeReducer
})
export default reducer;