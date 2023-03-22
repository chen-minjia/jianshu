import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {ListItem,ListInfo,LoadMore} from '../style.js'
import { actionCreators } from '../store';
class List extends PureComponent {
  render() {
  const {list,getMoreList,articlePage} = this.props;
    return (
      <div>
        {
          list.map((item,index)=>{
            return(
              // <Link key={index} to='/detail'>
              <Link key={index} to={'/detail/'+item.get('id')}>
              <ListItem>
                <img className='pic'
                src={item.get('imgUrl')} alt=''/>
                <ListInfo>
                  <h3 className='tltle'>{item.get('title')}</h3>
                  <p className='desc' >{item.get('desc')}</p>
                </ListInfo>
              </ListItem> 
              </Link>            
            )
          })
        }
        <LoadMore onClick={()=>{getMoreList(articlePage)}}>更多文字</LoadMore>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  list:state.get('home').get('articleList'),
  articlePage:state.getIn(['home','articlePage'])//获取当前页数
})
const mapDispatchToProps =(dispatch)=>({
  getMoreList(articlePage){
    dispatch(actionCreators.getMoreList(articlePage))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(List);
