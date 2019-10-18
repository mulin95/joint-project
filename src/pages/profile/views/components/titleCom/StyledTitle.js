import styled from 'styled-components'

const TitleCom = styled.div`
    height: .44rem;
    background: #FFFFFF;
    padding: 0 .15rem;
    border-bottom:1px solid #E9E9E9;
    >div{
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        position: relative;
        color:#333;
        font-size:.17rem;
        .iconLeft{
            position: absolute;
            left:0;
            width:.17rem;
            height:.17rem;
            img{
                display:block;
                height:100%;
            }
        }
        .textLeft{
            position: absolute;
            left:0;
            font-size:.14rem;
            color:#666;
        }
        .textRight{
            position: absolute;
            right:0;
            font-size:.14rem;
            color:#666;
        }
    }
`

export default TitleCom; 