import styled from 'styled-components';
import border from 'styled/border';


const Container=styled.div`
  background:#fff;
  height:100%;
  display:flex;
  flex-flow:column;
  >div:nth-child(2){
    padding:0 .15rem;
    flex:1;
    overflow-y:scroll;
    >ul{
      >li:last-child::after{
        border:none;
      }
    }
  }
`

const Input=border({
  width:'1px 0 0',
  comp:styled.div`
    height:.49rem;
    width:100%;
    padding:0 .15rem;
    display:flex;
    align-items:center;
    box-shadow:2px 2px 4px 0px rgba(0,0,0,0.5);
    >div{
      flex:1;
      position:relative;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:.11rem;
      color:#999;
      input{
        height:.3rem;
        width:100%;
        background:rgba(0,0,0,0);
        z-index:10;
        border-radius:.04rem;
        padding:0 .11rem;
        border:1px solid rgba(207,207,207,1);
      }
      p{
        position:absolute;
        right:.22rem;
      }
    }
    button{
      margin-left:.15rem;
      width:.55rem;
      height:.30rem;
      background:rgba(255,255,255,1);
      border-radius:.04rem;
      border:1px solid rgba(207,207,207,1);
      font-size:.14rem;
      color:#666;
    }
  `
})

export{
  Container,
  Input
}