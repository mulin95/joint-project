import styled from 'styled-components'

const MEContainer=styled.div`
    position: absolute;
    width:100%;
    top:0;
    >div{
        background:transparent;

    }
    .left{
        background:rgba(0,0,0,.3);
        border-radius:50%;
        width:.3rem !important;
        height:.3rem !important;
        padding:.05rem;
    }
`

const Div=styled.div`
    background:#fff;
    height:100%;
    overflow:hidden;
    overflow-y:scroll;
    display:flex;
    flex:1;
    flex-direction:column;
    position: relative;
    .main{
        overflow:hidden;
        overflow-y:scroll;
        display:flex;
        flex-direction:column;
        >div{
            position: relative;
        }
        .bg1{
            width:100%;
            height:16.3%;
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
        .center{
            display:flex;
            flex-direction:column;
            text-align:center;
            justify-content:center;
            .sdetail{
                width:1.5rem;
                height:.18rem;
                margin-top:.25rem;
            }
           .spt1{
                width:2.95rem;
                height:2.9rem;
                margin-top:.25rem;
            }
        }
        .spt2{
            width:100%;
            height:16%;
        }
        .spt3{
            width:100%;
            height:17%;
        }
        .spt4{
            width:100%;
            height:21%;
        }
    }
    .footer{
        height:.49rem;
        background:#fff;
        padding:0 .18rem;
        display:flex;
        justify-content:center;
        align-items:center;
        .service{
            display:flex;
            align-items:center;
            width:42%;
            height:.49rem;
            color:#666666;
            font-size:.16rem;
            img{
                width:.18rem;
                height:.18rem;
                margin-right:.08rem;
            }
        }
        .buy{
            display:flex;
            align-items:center;
            justify-content:center;
            width:58%;
            height:.3rem;
            background:linear-gradient(90deg,rgba(52,190,253,1) 0%,rgba(47,138,255,1) 100%);
            border-radius:1rem;
            color:#fff;
            font-size:.16rem;
        }
    }
`

export{
    Div,
    MEContainer
}
