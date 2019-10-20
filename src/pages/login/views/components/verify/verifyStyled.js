import Styled from 'styled-components'
const VerifyContanier = Styled.div`
    
    overflow:scroll;
    background:#fff;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
   .secondRetry{
    margin-top:0.33rem;
    margin-left:0.32rem;
    }
    .verifyLineContainer{
        display:flex;
        align-self:center
        width:2.84rem;
        
        .verifyLineDiv{
            flex:1
            width:0.55rem;
            height:0.70rem;
            position:relative;
            margin:0;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            .verifyLineInput{
                align-self:center
                width:0.20rem;
                border:0;
                align-self:center;
            }
            .verifyLine{
                margin:0 0.08rem 0 0.08rem
                width:0.55rem;
                display:inline; 
            }
        }
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
export default VerifyContanier