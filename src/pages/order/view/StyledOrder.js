import styled from 'styled-components'

const TabBarContainer = styled.div `
    background: #fff;
    ul {
        height: .32rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
        text-align: center;
        li {
            flex: 1;
            font-size: .14rem
        }
    }
`

const ListBody = styled.div`
    flex: 1;
    position: relative;
    overflow: hidden;
`
export {
    TabBarContainer,
    ListBody
}