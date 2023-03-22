import React, { Component } from 'react';
import {connect} from 'react-redux';
import {TopicWrapper,TopicItem} from '../style'
class Topic extends Component {
  render() {
    const {list} =this.props;
    return (
      <TopicWrapper>
        {
          list.map((item)=>{
            return (
              // 注意，这里 item 也是Immutable对象，需要.get获取属性值
              <TopicItem key={item.get('id')}>
                <img className='topic-pic'
                src={item.get('imgUrl')} />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}
const mapStateToProps=(state)=>({
  list:state.getIn(['home','topicList']),
});
// const mapDispatchToProps=(dispatch)=>{
//   // return dispatch();
// }

export default connect(mapStateToProps,null)(Topic);
