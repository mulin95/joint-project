import styled from 'styled-components'

const ButtonContainer = styled.div`
    position: absolute;
    left:0;
    height:.41rem;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    >div{
        width:3.13rem;
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
`

export default ButtonContainer;