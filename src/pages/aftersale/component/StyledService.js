import styled from 'styled-components'

const Ip = styled.div`
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction:column;
    div{
        flex: 1
    }

    h6 {
        height: .3rem;
        input {
            height: .3rem;
            width: 77%;
            border-radius: .04rem;
            padding: 0 .11rem;
            border: 1px solid rgba(207,207,207,1);
        }
        button {
            margin-left: .15rem;
            width: 16.6%;
            height: .30rem;
            background: rgba(255,255,255,1);
            border-radius: .04rem;
            border: 1px solid rgba(207,207,207,1);
            font-size: .14rem;
            color: #666;
        }
    }
`

export {
    Ip
}