import styled from 'styled-components';
import border from 'styled/border';
const bigFont=`
  line-height:.2rem;
  font-size:.14rem;
  color:#666;
`
const smlFont=`
  line-height:.16rem;
  font-size:.11rem;
  color:#999;
`
const CellContainer=border({
  width:'0 0 1px',
  comp:styled.div`
  padding:0 .15rem;
  background:#fff;
  .user{
    padding:.07rem 0;
    display:flex;
    >img{
      width:.4rem;
      height:.4rem;
      border-radius:50%;
      font-size:0;
    }
    >div{
      padding-left:.1rem;
      flex:1;
      >p{
        padding-top:.02rem;
        &:nth-child(1){
          ${bigFont}
        }
        &:nth-child(2){
          ${smlFont}
        }
      }
    }
  }
  .content{
    p{
      padding:.03rem 0;
      >img{
        width:.2rem;
        height:.2rem;
        margin-right:.06rem;
      }
      span{
        ${bigFont}
      }
    }
    >div{
      padding:.06rem 0;
      >img{
        width:1.5rem;
        height:1.14rem
      }
    }
  }
  .foot{
    height:.26rem;
    padding-bottom:.02rem;
    display:flex;
    justify-content:space-between;
    >li{
      display:flex;
      align-items:center;
      &:nth-child(1)>p{
        width:.24rem;
        height:.24rem;
      }
      >p{
        width:.2rem;
        height:.2rem;
        font-size:0;
        display:flex;
        align-items:center;
        >img{
          width:100%;
          object-fit:cover;
        }
      }
      span{
        padding-left:.07rem;
        ${smlFont}
      }
    }
  }
`
})


export {
  CellContainer
}