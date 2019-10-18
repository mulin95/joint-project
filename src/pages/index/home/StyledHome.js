import styled from 'styled-components'
import border from '../../../components/styled/border' 

const CateContainer=styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  background:#fff;
  header{
    height:.44rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  `

const Search=styled.div`
    padding:0 .15rem;
    .grade{
      font-size:.17rem;
      color:#333333;
      font-weight:500;
    }
    .search{
        position: relative;
        display:flex;
        align-items:center;
        input{
          width:2rem;
          height:.25rem;
          background:#E9E9E9;
          border:none;
          border-radius:.04rem;
          font-size:.12rem;
          color:#999999;
          padding-left:.58rem;
          position: relative;
        }
        img{
            width:.13rem;
            height:.13rem;
            position:absolute;
            left:.35rem;
        } 
    }  
`


const Nav=border({
    width:'0 0 1px 0',
    comp:styled.div`
    padding:0 .15rem;
    height:.32rem;
    display:flex;
    justify-content:space-between;
    a{
        align-items:center;
        color:#666666;
        font-size:.14rem;
        display:flex;
        border-bottom:.02rem solid #fff;
        &.active{
            color:#2F8AFF;
            border-bottom:.02rem solid #2F8AFF;
        }
    }   
`
})


export{
    CateContainer,
    Search,
    Nav,
}