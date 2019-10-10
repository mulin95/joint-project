import styled from 'styled-components';
import border from 'styled/border';

const IndexContainer=styled.div`
  height: 100%;
  display: flex;
  flex-direction:column;
  main {
    flex: 1
  }
  nav {
    height: .49rem;
    background: #fff;
  }
`
const TableBar=border({
  comp:styled.nav`
    ul{
      display: flex;
      height: 100%;
      li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        >div{
          width: .3rem;
          height: .3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            height:.2rem;
          }
        }
        span{
          font-size: .12rem;
          line-height: .17rem;
          color: #333;
        }
        &.active{
          span{
            color: #2F8AFF;
          }
        }
      }
    }
  `
})

export {
  IndexContainer,
  TableBar
} 