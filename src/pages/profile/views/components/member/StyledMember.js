import styled from 'styled-components';

import member_1 from 'assets/profileImages/member-1.png'
import member_2 from 'assets/profileImages/member-2.png'
import member_4 from 'assets/profileImages/member-4.png'

const MemberListCom = styled.div`
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
        
    }
`

const MemberOppenCom = styled.div`

`

const MemberBackCom = styled.div`

`

export {
    MemberListCom,
    MemberOppenCom,
    MemberBackCom
}