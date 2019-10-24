import styled from 'styled-components';

const UserListCom = styled.div`
    position: relative;
    height:100%;
    >div{   
        height:100%;
        background:#fff;
        .title{
            height: .44rem;
            background: #FFFFFF;
            padding: 0 .15rem;
            border-bottom:1px solid #E9E9E9;
            >div{
                height:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                position: relative;
                color:#333;
                font-size:.17rem;
                .iconLeft{
                    position: absolute;
                    left:0;
                    width:.17rem;
                    height:.17rem;
                    img{
                        display:block;
                        height:100%;
                    }
                }
            }
        }
        .use{
            background-color:#F5F5F5;
        }
        ul{
            padding:.4rem .15rem 0 .15rem;
            li{
                display:flex;
                align-items:center;
                width:100%;
                height:.5rem;
                line-height:.5rem;
                border-bottom:1px solid #E9E9E9;
                span{
                    color:#979797;
                    font-size:.14rem;
                }
                div{
                    height:.5rem;
                    line-height:.5rem;
                    flex:1;
                    text-align:right;
                    img{
                        width:.42rem;
                        height:.42rem;
                        border-radius:50%;
                        float:right;
                    }
                    span{
                        display:inline-block;
                        color:#333;
                        font-size:.16rem;
                        width:1.5rem;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                }
                .name{
                    span{
                        color:#979797;
                        font-size:.12rem;
                    }
                }
                .arrow{
                    width:.18rem;
                    height:.18rem;
                    margin-left:.12rem;
                }
            }
        }
    }
    .useCom{
        background-color:#F5F5F5;
    }
    .bottom{
        width:100%;
        height:1.5rem;
        position: absolute;
        bottom:0;
        z-index:99;
        background-color:#FFF;
        p{
            height:.5rem;
            line-height:.5rem;
            font-size:.16rem;
            color:#000;
            text-align:center;
            border-bottom:1px solid #F4F4F4;
            position: relative;
            >input{
                /* display: none; */
                opacity:0;
                position: absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
            }
        }
    }
    .none{
        display:none;
    }
`

const UserAboutCom = styled.div`
    height:100%;
    background: linear-gradient(to bottom, #32A3FD 0% , #2F8BFF 100%);
    .content{ 
        width:100%;
        height:100%;
        padding:.2rem .15rem 1rem .15rem;
        >div{
            width:100%;
            height:100%;
            background:#fff;
            border-radius:.3rem;
            padding:.3rem .28rem;
            overflow: scroll;
            p{
                line-height:.26rem;
                margin-bottom: .2rem;
                color:#333;
                font-size:.17rem;
            }
        }
    }
`

const TitleCom = styled.div`
    height: .44rem;
    background: #FFFFFF;
    padding: 0 .15rem;
    background-color:#32A4FE;
    >div{
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        position: relative;
        color:#FFF;
        font-size:.17rem;
        img{
            position: absolute;
            left:0;
            width:.11rem;
            height:.18rem;
        }
    }
`

const UserNameCom = styled.div` 
    height: 100%;
    background: #FFFFFF;
    .user{
        padding: 0 .15rem;
        height:.6rem;
        padding-top:.2rem;
        >div{
            display:flex;
            align-items:center;
            border-bottom:1px solid #E9E9E9;
            input{
                color:#4E4E4E;
                font-size:.16rem;
                flex:1;
                border:none;
                height:.36rem;
                line-height:.36rem;
            }
            a::before{
                border:none;
            }
            span{
                color:#666;
                font-size:.14rem;
            }
        }
    }
    >p{
        padding-top:.3rem;
        padding-left:.15rem;
        img{
            width:.16rem;
            height:.16rem;
            margin-right:.1rem;
            margin-top:-.02rem;
        }
        span{
            color:#979797;
            font-size:.14rem;
        }
    }
`

const UserTelCom = styled.div`
    height: 100%;
    background: #FFFFFF;
    .content{
        padding:.6rem .2rem 0;
        text-align:center;
        p{
            color:#BDBDBD;
            font-size:.16rem;
            margin-bottom:.15rem;
        }
        div{
            color:#333;
            font-size:.24rem;
            font-weight:bold;
            margin-bottom:.15rem;
        }
        span{
            color:#979797;
            font-size:.14rem;
        }
    }
`

export{
    UserListCom,
    UserAboutCom,
    TitleCom,
    UserNameCom,
    UserTelCom
}