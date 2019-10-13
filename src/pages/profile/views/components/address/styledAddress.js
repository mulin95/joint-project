import styled from 'styled-components';

const AddressListCom = styled.div`
    background:rgba(216, 216, 216, 0.3);
    ul{
        padding-top:.2rem;
        li{
            display:flex;
            background:#fff;
            height:.62rem;
            width:100%;
            align-items:center;
            margin-bottom:.2rem;
            .user{
                width:.54rem;
                height:.54rem;
                margin:0 .1rem;
                border-radius:50%;
            }
            .info{
                flex:1;
                .userName{
                    color:#666666;
                    font-size:.14rem;
                    font-weight:bold;
                }
                .tel{
                    color:#999999;
                    padding-left:.06rem;
                    font-size:.12rem;
                }
                p{
                    color:#979797;
                    font-size:.12rem;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: .14rem;
                    padding-right:.32rem;
                }
            }
            .line{
                width:.01rem;
                height:.39rem;
            }
            .add{
                margin:0 .15rem;
                color:#666666;
                font-size:.14rem;
                font-weight:bold;
            }
        }
    }
`


export{
    AddressListCom
}