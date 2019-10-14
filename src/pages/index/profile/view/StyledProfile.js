import styled from 'styled-components';
import border from 'components/styled/border';
import bgimg  from 'assets/profileImages/background.jpg';
import setUp  from 'assets/profileImages/setUp.png';

const Profile = styled.div`
    background : #fff;
    width:100%;
    height:100%;
    header{
        height : 2.34rem;
        width : 100%;
        background:url(${bgimg}) no-repeat 0 0;
        background-size:cover;
        position: relative;
        margin-bottom:.32rem;
        display:flex;
        justify-content:center;
        align-items:center;
        span{
            position: absolute;
            right:.2rem;
            top:.3rem;
            width :.17rem;
            height:.17rem;
            background:url(${setUp});
            background-size:100%;
        }
        dl{
            margin-top:.3rem;
            width :1.05rem;
            height:1.35rem;
            dt{
                margin:0 .08rem .27rem .08rem;
                width :.9rem;
                height:.9rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            dd{
                width :1.05rem;
                height:.2rem;
                line-height:.2rem;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                color:#FFFFFF;
                font-size:.14rem;
                text-align:center;
            }
        }
    }
`

const Content = styled.ul`
    background:#F3F1F1;
    li{
        width : 100%;
        height : .42rem;
        line-height : .42rem;
        display:flex;
        align-items:center;
        background:#fff;
        padding-left :.2rem;
        position: relative;
        img{
            width : .16rem;
            height : .18rem;
            margin-right:.12rem;
        }
    }
    li:nth-child(2){
        margin-bottom:.06rem;
    }
`

const Text = border({
    width : ' 0 0 1px 0 ',
    comp:styled.p`
        flex:1;
        margin-right:.2rem;
        span{
            font-size :.17rem;
            color : #666666;
        }
        .iconRight{
            width:.12rem;
            height:.14rem;
            position: absolute;
            right :-.06rem;
            top:.16rem;
        }
    `
})

export{
    Profile,
    Content,
    Text
}
