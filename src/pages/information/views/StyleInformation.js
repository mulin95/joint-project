import styled from 'styled-components'

const Div=styled.div`
    background:#fff;
    height:100%;
    overflow:hidden;
    overflow-y:scroll;
   .bg1{
       width:100%;
       height:2.64rem;
   }
   .fit{
       padding:.2rem .15rem 0;
       width:100%;
       .price{
            display:flex;
            align-items:flex-end;
            height:.23rem;
            width:100%;
            .price1{
                color:#FF5C2F;
                font-size:.17rem;
                span{
                    font-size:.11rem;
                }
            }
            .vip{
                font-size:.12rem;
                color:#2F8AFF;
                .vipprice{
                    margin-left:.15rem;
                }
                .vipp{
                     margin-left:.05rem;
                }
            }
        }
        .title{
            font-size:.17rem;
            color:#333333;
            margin-top:.03rem;
        }
        .fitgrade{
            margin-top:.08rem;
            .grade1{
                background:#C8E0FF;
                border-radius:.02rem;
                padding:.02rem .08rem;
                font-size:.11rem;
                color:#2F8AFF;
                margin-right:.1rem;
            }
            .grade2{
                color:#2F8AFF;
                font-size:.14rem;
            }
        }
   }
`

export{
    Div
}
