import styled from 'styled-components';
import border from 'styled/border';

const NoteCom = styled.div`
    height :100%;
    background:#fff;
    ul{
        padding:0 .15rem;
        li{
            display:flex;
            align-items:center;
            height : .52rem;
            font-size:.16rem;
            color:#9E9E9E;
            border-bottom:1px solid #E9E9E9;
            p{
                flex:1;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                font-weight:bold;
                margin-right:.18rem;
            }
            img{
                width:.18rem;
                height:.18rem;
                margin-left:.18rem;
            }
        }
    }   
`

const NoteHeader = border({
    width:'0 0 1px 0',
    comp:styled.div`
        .add{
            width :.14rem;
            height :.14rem;
        }
    `
})

const NoteAddCom = styled.div`
    height:100%;
    background:#fff;
    .right{
        .and-com{
            margin-left:0;
            margin-right:0;
            .am-whitespace{
                display:none;
            }
            .am-button{
                height: 100%;
                line-height: 100%;
                border:none;
                span{
                    color:#666;
                    font-size:.14rem;
                }
            }
            .am-button::before{
                border:none;
            }
        }
    }
    .content{
        padding:.3rem 1rem 0 .2rem;
        p:nth-child(1){
            height:.38rem;
            display:flex;
            align-items:center;
            margin-bottom:.2rem;
            span{
                font-size:.16rem;
                color:#333;
            }
            div{
                height:.3rem;
                flex:1;
                border-bottom:1px solid #999;
                input{
                    padding-left:.03rem;
                    font-size:.14rem;
                    color:#333;
                    width:100%;
                    height:100%;
                    border:none;
                }
            }
        }
        p:nth-child(2){
            height:1.6rem;
            display:flex;
            span{
                font-size:.16rem;
                color:#333;
            }
            div{
                flex:1;
                height:1.5rem;
                textarea{
                    padding:.05rem;
                    font-size:.14rem;
                    color:#333;
                    width:100%;
                    height:100%;
                    resize:none;
                }
            }
        }
    }
`

const NoteShowCom = styled.div`
    height:1000%;
    background:#fff;
`

export {
    NoteCom,
    NoteHeader,
    NoteAddCom,
    NoteShowCom
}