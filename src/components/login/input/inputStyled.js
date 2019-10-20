import Styled from 'styled-components'

const emailContainer = Styled.div`
    width:3.12rem;
    height:0.31rem;
    display: flex;
    align-content: space-between;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top:0.38rem;
    .showPassword{
        width:0.21rem;
        height:0.14rem;
        align-self:center 
    }
    .tip{
        font-size:0.14rem;
        color:#CFCFCF;
    }
    .text{
        width:2rem;
        height:0.2rem;
        border:0;
        align-self: flex-start
        margin-bottom: 0.09rem;
            &::-webkit-input-placeholder{
            color:#CFCFCF;
            }
            &::-moz-placeholder{
            color:#CFCFCF;
            }
            &::-moz-placeholder{
            color:#CFCFCF;
            }
            &::-ms-input-placeholder{
            color:#CFCFCF;
            }
    } 
    .longVline{
        width:3.12rem;
        height: 0.02rem;
       

    }


`

export default emailContainer