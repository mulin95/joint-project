import styled from 'styled-components'

const Div=styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        overflow:hidden;
        overflow-y:scroll;
        flex:1;
        padding:0 .15rem;
        background:#fff;
        .information{
            width:100%;
            height:1.14rem;
            border:1px solid #CFCFCF;
            border-radius:.04rem;
            box-shadow:0px 0px 1px 0px rgba(0,0,0,0.5);
            margin:.1rem 0 .2rem 0;
            padding:.26rem .32rem 0 .15rem;
            display:flex;
            position: relative;
            .vip{
                background:#C8E0FF;
                color:#2F8AFF;
                font-size:.13rem;
                width:.36rem;
                height:.2rem;
                border-radius:.02rem;
                text-align:center;
                line-height:.2rem;
                margin-right:.1rem;
            }
            .detail{
                .name{
                    color:#333333;
                    font-size:.14rem;
                    font-weight:600;
                    margin-right:.15rem;
                }
                .number{
                    color:#999999;
                    font-size:.11rem;
                }
                .address{
                    margin-top:.1rem;
                    color:#333333;
                    font-size:.11rem;
                    font-weight:500;
                }
            }
            img{
                    width:.14rem;
                    height:.14rem;
                    position:absolute;
                    top:.58rem;
                    right:.12rem;
                }
        }
        .freight{
            width:100%;
            height:4.05rem;
            border:1px solid #CFCFCF;
            border-radius:.04rem;
            box-shadow:0px 0px 1px 0px rgba(0,0,0,0.5);
            margin-bottom:.1rem;
        }
    }
    .footer{
        display:flex;
        button{
            width:100%;
            height:.49rem;
            background:linear-gradient(90deg,rgba(52,190,253,1) 0%,rgba(47,138,255,1) 100%);
            border:none;
            color:#fff;
            font-size:.16rem;
        }  
    }
`

const BuyBar=styled.div`
     
`


export {
    Div,
    BuyBar,
}
