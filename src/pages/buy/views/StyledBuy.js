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
            padding:.08rem .15rem 0;
            display:flex;
            flex-direction:column;
            /* flex:1; */
            .top{
                display:flex;
                img{
                    width:.79rem;
                    height:.97rem;
                }
                .msg{
                    width:62%;
                    height:.97rem;
                    margin-left:.1rem;
                    display:flex;
                    flex-direction:column;
                    padding-top:.22rem;
                    font-size:.11rem;
                    color:#333333;
                    .fit{
                        width:.6rem;
                        height:.2rem;
                        margin-top:.08rem;
                        background:#C8E0FF;
                        color:#2F8AFF;
                        padding:.02rem .08rem;
                        border-radius:.02rem;
                    }
                }
                .price{
                    width:38%;
                    height:.97rem;
                    display:flex;
                    flex-direction:column;
                    align-items:flex-end;
                    padding-top:.22rem;
                    font-size:.11rem;
                    margin-left:.07rem;
                    .num{
                        color:#999999;
                    }
                }
            }
            .middle{
                margin-top:.2rem;
                display:flex;
                font-size:.11rem;
                color:#333333;
                .left{
                    width:76%;
                    height:1.84rem;
                    padding-left:.2rem;
                    div,i{
                        margin-bottom:.4rem;
                        span{
                            color:#999999;
                            margin-left:.12rem;
                        }
                    }
                    input{
                        color:#999999;
                        margin-left:.12rem;
                        border:none;
                        width:70%;
                    }
                }
                .right{
                    width:24%;
                    height:1.84rem;
                    display:flex;
                    flex-direction:column;
                    align-items:flex-end;
                    button{
                        border:1px solid #ccc;
                        padding:.02rem .04rem; 
                        background:#fff;
                        color:#999999;
                    }
                    i{
                        margin:0 .05rem;
                    }
                    .song{
                        margin-top:.4rem;
                    }
                }
            }
            .bottom{
                width:100%;
                height:.2rem;
                margin-top:.4rem;
                font-size:.11rem;
                display:flex;
                justify-content:flex-end;
                .num{
                    color:#999999;
                    margin-right:.06rem;
                }
                .money{
                    color:#333;
                    i{
                        color:#2F8AFF;
                    }
                }
            }
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
