import styled from 'styled-components';

import border from 'components/styled/border';

const bigFont=`
  font-size:.17rem;
  line-height:.24rem;
  color:#333;
`
const midFont=`
  font-size:.14rem;
  line-height:.2rem;
  color:#666;
`
const smlFont=`
  font-size:.11rem;
  line-height:.16rem;
  color:#999;
`

const center=`
  display:flex;
  align-items:center;
  justify-content:center;
`

const Item=border({
  width:'0 0 1px',
  comp:styled.li`
    padding:.06rem 0;
    display:flex;
    >img{
      height:.8rem;
      width:.8rem;
    }
    >div{
      padding-left:.1rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      p{
        ${bigFont}
      }
      ul{
        display:flex;
        padding-top:.1rem;
        li{
          ${smlFont}
          img{
            font-size:0;
            width:.13rem;
          }
          &:nth-child(1){
            padding-right:.06rem;
          }
          &:nth-child(2){
            padding-left:.06rem;
            border-left:1px solid #CFCFCF;
          }
        }
      }
    }
  `
}) 

const TextBar=styled.div `
  h2{
    ${bigFont}
  }
  ul{
    height:.36rem;
    padding:.1rem 0 .06rem;
    display:flex;
    align-items:center;
    li{
      ${midFont}
      padding-right:.06rem;
      line-height:.16rem;
      &:nth-child(n+2){
        padding-left:.06rem;
        border-left:1px solid #CFCFCF;
      }
    }
  }
`

const PracticeContainer=styled.div`
  background:#fff;
  height:100%;
  padding:0 .15rem;
  display:flex;
  flex-direction: column;
  .container{
    flex:1;
    overflow-y:scroll;
    >ul{
      >li:last-child::after{
        border:none;
      }
    }
  }
  .banner{
    padding: .1rem 0 .12rem;
    img{
      width:100%;
    }
  }
`
const Title=styled.div`
  height:.44rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  .left{
    ${center}
    p:nth-child(1){
      ${bigFont}
      margin-right:.05rem;
    }
    p:nth-child(2){
      span{
        ${midFont}
        line-height:.15rem;
        border-left:.01rem solid #CFCFCF;
        padding:0 .08rem 0 .06rem;
      }
      img{
        width:.1rem;
        height:.08rem;
      }
    }
  }
`



export {
  PracticeContainer,
  Title,
  TextBar,
  Item
}

