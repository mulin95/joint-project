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
    >div{
      position:absolute;
      top:0;
      right:0;
      height:100%;
      display:flex;
      align-items:center;
      >div{
        width:.5rem;
        height:.24rem;
        background:#E9E9E9;
        border-radius:.04rem;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
          width:.13rem;
          height:.14rem;
        }
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