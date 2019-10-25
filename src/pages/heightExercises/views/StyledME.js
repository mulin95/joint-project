import styled from 'styled-components'

const Div=styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    flex: 1;
    overflow:hidden;
    position:relative;
`

const MEContainer=styled.div`
    background:#fff;
    .btn{
        background:#E9E9E9;
        border-radius:.04rem;
        padding:.01rem .18rem;
        img{
            width:.13rem;
            height:.14rem;
        }
    }
`
const List=styled.div`
    background:#fff;
    height:100%;
    padding:0 .15rem;
`


export {
    Div,
    MEContainer,
    List
}