import styled from 'styled-components';

const SetUpListCom = styled.div`
    background:#fff;
    height:100%;
    .header{
        border-bottom:1px solid #F4F4F4;
    }
    ul{
        padding:0 .15rem;
        li{
            width:100%;
            height:.65rem;
            line-height:.65rem;
            display:flex;
            align-items:center;
            border-bottom:1px solid #F4F4F4;
            img{
                width:.16rem;
                height:.18rem;
            }
            p{
                font-size:.18rem;
                color:#666;
                flex:1;
                margin-left:.3rem;
            }
            .arrow{
                width:.2rem;
                height:.2rem;
            }
        }
    }
`

export{
    SetUpListCom
}