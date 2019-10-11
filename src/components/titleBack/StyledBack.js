import styled from 'styled-components';

const TitleBackContainer=styled.div`
  height: .44rem;
  background: #FFFFFF;
  padding: 0 .15rem;
  >div{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    font-size:.17rem;
    color:#333;
    .left{
      position:absolute;
      left:0;
      font-size:.14rem;
      color:#666;
      line-height:.2rem;
    }
    .right{
      position:absolute;
      right:0;
    }
    .backImg{
      width:.17rem;
      height:.17rem;
      font-size:0;
      text-align:center;
      img{
        height:100%;
      }
    }
  }
  
`

export {
  TitleBackContainer
}