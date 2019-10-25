import styled from 'styled-components'
import btnimg from 'loginImages/getCheckIn.png'

const BtnContainer = styled.button`
  border:0px;
  max-width:83%;
  height:0.4rem;
  background:url('${btnimg}') no-repeat center center;
  border-radius:0.20rem;
  margin-left:0.32rem;
  margin-top:0.24rem;
  color:#fff;
  font-size:0.16rem;
  text-align:center;
  line-height:0.4rem;
  
`
export {
  BtnContainer
} 