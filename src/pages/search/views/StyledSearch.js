import styled from 'styled-components'
import border from '../../../components/styled/border' 

const SeacrhContainer=styled.div`
  background:#fff;
  height:100%;
  padding:0 .15rem;
  input{
    color:#333333;
    font-size:.24rem;
    padding:.23rem 0 .1rem .1rem;
    border:none;
  }

`
const TitleBar=border({
    width:'1px 0 0 0',
    comp:styled.div`
    padding-top:.1rem;
    .hot{
        color:#333333;
        font-size:.17rem;
        margin:.22rem 0 .21rem 0;
    }
    .tiname{
        padding:.05rem .17rem;
        background:#C8E0FF;
        font-size:.14rem;
        color:#2F8AFF;
        border-radius:.04rem;
        margin:0 .2rem .15rem 0; 
        width:max-content;
        display:inline-block;
    }
    `
})







export{
    SeacrhContainer,
    TitleBar
}