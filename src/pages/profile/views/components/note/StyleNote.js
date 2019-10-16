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
    inp{
        
    }
`

export {
    NoteCom,
    NoteHeader,
    NoteAddCom
}