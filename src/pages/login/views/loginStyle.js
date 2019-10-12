import styled from 'styled-components'

const loginContaniner = styled.div`
    overflow:hidden;
    background:#fff;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    display:flex;
    input{
        
        max-width:60%;
        height:0.20rem;
        font-size:14px;
        font-family:PingFangHK-Regular,PingFangHK;
        font-weight:400;
        color:#000;
        line-height:0.20rem;
        border:none;
        margin-top:0.43rem;
        margin-left:0.32rem;
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
    img{
        margin-left:0.32rem;
        margin-top:0.09rem;
        display:block;
        max-width:83%;
        height:0.02rem;

    }
    .passw{
        font-size:0.14rem;
        color:#666;
        max-width:88%;
        text-align:end;
        margin-top:0.24rem;
    }
    .otherlogin{
        font-size:0.11rem;
        color:#000;
        text-align:center;
        margin-top:1.91rem;
    }
    .email{
        margin-top:0.24rem;
        width:0.36rem;
        height:0.36rem;
        margin:0.24rem auto 0;
    }
    #email{
        text-align:center;
        margin-top:0.07rem;
        font-size:11px;
    }
    .skip{
        font-size:0.14rem;
        color:#666666;
        margin-top:0.15rem;
        display:inline-block;
        max-width:95%;
        text-align:end;
        font-family:PingFangHK-Regular,PingFangHK;
    }
` 
export default loginContaniner