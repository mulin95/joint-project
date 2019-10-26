import styled from 'styled-components'
import btnimg from 'loginImages/getCheckIn.png'

const BtnContainer = styled.div`
  padding:.2rem;
  button{
    width:100%;
    height:0.4rem;
    border:0px;
    background:url('${btnimg}') no-repeat center center;
    border-radius:0.20rem;
    color:#fff;
    font-size:0.16rem;
    text-align:center;
    line-height:0.4rem;
  }
`
export {
  BtnContainer
} 