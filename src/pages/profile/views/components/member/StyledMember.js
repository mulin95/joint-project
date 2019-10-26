import styled from 'styled-components';

import member_1 from 'assets/profileImages/member-1.png'
import member_2 from 'assets/profileImages/member-2.png'
import member_4 from 'assets/profileImages/member-4.png'

const MemberListCom = styled.div`
    overflow:scroll;
    background-color:#fff;
    height:100%;
    header{
        width:100%;
        height:1.82rem;
        background:url(${member_1}) no-repeat 0 0; 
        background-size:cover;
        position: relative;
        img{
            width:.1rem;
            height:.17rem;
            position: absolute;
            left:.15rem;
            top:.15rem;
        }
        p{
            color:#333;
            font-size:.18rem;
            font-weight:bold;
            position: absolute;
            left:.15rem;
            top:.6rem;
        }
        span{
            color:#fff;
            font-size:.16rem;
            font-weight:bold;
            position: absolute;
            left:.15rem;
            top:.9rem;
        }
    }
    .privilege{
        padding:.15rem;
        >p{
            color:#333;
            font-size:.16rem;
            font-weight:bold;
            margin-bottom:.3rem;
        }
        .privilege-img{
            display:flex;
            >div{
                width:1.65rem;
                height:.75rem;
                background:url(${member_4}) no-repeat 0 0;
                background-size:cover;
                display:flex;
                justify-content:space-around;
                align-items:center;
                border-radius:.2rem;
                p{
                    width:.8rem;
                    color:#fff;
                    font-size:.11rem;
                }
                img{
                    width:.4rem;
                    height:.4rem;
                }
            }
            div:nth-child(1){
                background-image:url(${member_2});
                margin-right:.15rem;
            }
        }
    }
    .exercises{
        p{
            padding-left:.15rem;
            color:#333;
            font-size:.16rem;
            font-weight:bold;
            line-height:.35rem;
        }
        span{
            padding-left:.15rem;
            color:#9E9E9E;
            font-size:.14rem;
            font-weight:bold;
        }
        div{
            margin-top:.25rem;
            width:100%;
            height:1.25rem;
            display:flex;
            justify-content:space-evenly;
            align-items:center;
            img{
                width:1.1rem;
                height:1.25rem;
            }
        }
    }
    .btn{
        margin:.3rem 0 .8rem;
        height:.41rem;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        >div{
            width:85%;
            height:.41rem;
            border-radius:.8rem;
            background:linear-gradient(to right,#34B1FD,#2F8CFE);
            display:flex;
            justify-content:center;
            align-items:center;
            span{
                font-size:.16rem;
                color:#fff;
            }
        }
    }
`

const MemberOppenCom = styled.div`
    height:100%;
    background:#fff;
    .user{
        margin:.1rem .1rem 0 .1rem;
        padding-bottom:.1rem;
        height:.5rem;
        display:flex;
        align-items:center;
        border-bottom:1px solid #E9E9E9;
        >img{
            width:.4rem;
            height:.4rem;
            margin-right:.1rem;
        }
        .til{
            .name{
                font-weight:bold;
                color:#666;
                font-size:.18rem;
                line-height:.25rem;
                height:.25rem;
            }
            span{
                color:#9E9E9E;
                font-size:.16rem;
            }
            img{
                width:.2rem;
                height:.2rem;
                margin-top:-.05rem;
            }
        }
    }
    .member{
        margin-top:.35rem;
        .vip{
            margin-bottom:.13rem;
            color:#333;
            font-size:.18rem;
            font-weight:500;
            text-align:center;
        }
        >div{
            margin:0 .08rem;
            background:rgba(216, 216, 216, 0.3);
            border-radius:.05rem;
            padding-left:.08rem;
            >div{
                height:.4rem;
                display:flex;
                justify-content:center;
                align-items:center;
                padding-right:.2rem;
                p{
                    flex:1;
                    color:#333;
                    font-size:.14rem;
                }
                >i{
                    letter-spacing:-.01rem;
                    color:#666;
                    font-size:.14rem;
                    font-weight:bold;
                }
            }
            .first{
                height:.5rem;
                p{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    span{
                        color:#333;
                        font-size:.14rem;
                    }
                    em{
                        color:#9e9e9e;
                        font-size:.1rem;
                    }
                }
            }
        }
    }
    .title{
        color:#9e9e9e;
        font-size:.11rem;
        padding:.12rem 0 0 .8rem;
    }
`

const MemberBackCom = styled.div`
    height:100%;
    background:#fff;
    position:relative;
    .user{
        margin:.1rem .1rem 0 .1rem;
        padding-bottom:.1rem;
        height:.5rem;
        display:flex;
        align-items:center;
        border-bottom:1px solid #E9E9E9;
        >img{
            width:.4rem;
            height:.4rem;
            margin-right:.1rem;
        }
        .content{
            .name{
                color:#666;
                font-size:.18rem;
                line-height:.25rem;
                height:.25rem;
            }
            span{
                color:#9E9E9E;
                font-size:.16rem;
            }
            img{
                width:.2rem;
                height:.2rem;
                margin-top:-.05rem;
            }
        }
    }
    .title{
        width:1.6rem;
        height:.23rem;
        color:#9E9E9E;
        font-size:.16rem;
        position: absolute;
        left:50%;
        top:45%;
        transform: translate(-50%,-50%)
    }
`

export {
    MemberListCom,
    MemberOppenCom,
    MemberBackCom
}