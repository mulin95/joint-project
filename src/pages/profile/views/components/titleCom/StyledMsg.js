import styled from 'styled-components'

const MsgContai = styled.div`
    position: absolute;
    left:50%;
    top:36%;
    transform:translate(-50%,-50%);
    width:2rem;
    height:2.6rem;
    img{
        width:2rem;
        height:2rem;
        margin-bottom:.2rem;
    }
    span{
        width:100%;
        display:inline-block;
        font-size:.12rem;
        color:#666;
        text-align:center;
        word-break: break-all;
    }
`

export {
    MsgContai
}