import styled from 'styled-components'
import border from '../../../components/styled/border'

const Detaill=border({
    width:'0 0 1px 0',
    comp:styled.div`
      padding:.09rem 0 .15rem;
      display:flex;
      flex:1;
      img{
        width:.62rem;
        height:.76rem;
      }
      >div{
        width:82%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .ti{
            font-size:.14rem;
            color:#333333;
            height:41%;
            margin-left:.13rem;
            }
        >div{
                display:flex; 
                justify-content:space-between;
                height:59%;
                .msg{
                    display:flex;
                    justify-content:space-between;
                    flex-direction:column;
                    padding-left:.05rem;
                    position: relative;
                    .grade{
                    width:.6rem;
                    color:#2F8AFF;
                    font-size:.11rem;
                    padding:.02rem .08rem;
                    background:#C8E0FF;
                    border-radius:.02rem;
                    }
                    .advantage{
                    color:#999999;
                    font-size:.11rem;
                    }
                }
                .price{
                    display:flex;
                    align-items:flex-end;
                    .price1{
                        color:#FF5C2F;
                        font-size:.17rem;
                        span{
                            font-size:.11rem;
                        }
                    }
                    .vip{
                        .vipprice{
                            margin-left:.15rem;
                        }
                        font-size:.1rem;
                        color:#2F8AFF;
                        .vipp{
                            margin-left:.05rem;
                        }
                    }
                }
            }
        }
  `
  })

export{
    Detaill
}
  