import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft=styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight=styled.div`
  float: right;
  width: 240px;
`;
export const TopicWrapper=styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`;

export const TopicItem=styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  background: #f7f7f7;
  color: #000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem=styled.div`

`

// export const ListItem=styled.div`

// `