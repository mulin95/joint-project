import styled from 'styled-components';

const CommunicateContainer=styled.div`
  padding:0 .15rem;
  background:#fff;
  height:100%;
  display:flex;
  flex-flow:column;
  >div:nth-child(1){
    height:.44rem;
    position:relative;
    text-align:center;
    line-height:.44rem;
    font-size:.17rem;
    color:#333;
    display:flex;
    align-items:center;
    justify-content:center;
    >div{
      position:absolute;
      right:0;
      width:.5rem;
      height:.24rem;
      border:1px solid rgba(207,207,207,1);
      border-radius:.04rem;
      display:flex;
      justify-content:center;
      align-items:center;
      img{
        width:.13rem;
        height:.14rem;
      }
      &.left{
        left:0;
        color:#B9B9B9;
        font-size:.11rem;
      }
    }
  }
  >div:nth-child(2){
    flex:1;
    overflow-y:scroll;
    >ul{
      >li:last-child::after{
        border:none;
      }
    }
  }
`

export {
  CommunicateContainer
}