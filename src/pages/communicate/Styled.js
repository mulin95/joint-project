import styled from 'styled-components';
import border from 'styled/border';

const bg=`
background:#fff;
height:100%;
display:flex;
flex-flow:column;
>div:nth-child(2){
  flex:1;
  overflow-y:scroll;
}
`
const SearchContainer=styled.div`
  ${bg}
  .container{
    padding:0 .15rem;
    display:flex;
    flex-direction:column;
    .empty{
      flex:1;
      >div{
        height:3.36rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        img{
          width:2.01rem;
          height:2.07rem;
        }
        p{
          margin-top:.2rem;
          color:#666666;
          font-size:.14rem;
        }
      }
      
    }
  }
`

const AskContainer=styled.div`
  ${bg}
  >div:nth-child(2){
    padding:0 .15rem;
    >div:nth-child(2){
      margin-top:.18rem;
      width:3rem;
      height:3rem;
      border:1px solid rgba(112,112,112,1);
      color:#707070;
      font-size:.11rem;
      display:flex;
      justify-content:center;
      align-items:center;
      position: relative;
      input{
        width:100%;
        height:100%;
        position:absolute;
        opacity: 0
      }
      img{
        width:100%;
        height:100%;
        object-fit:cover;
        position:absolute;
      }
    }
  }
`
const InputContainer=styled.div`
  display:flex;
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
const InputBorder=border({
  width:'0 0 1px',
  comp:styled.div`
    display:flex;
    height:.3rem;
    position: relative;
    flex:1;
    align-items:center;
    input{
      width:100%;
      height:100%;
      border:none;
      color:#333;
      font-size:.17rem;
    }
    img{
      width:.11rem;
      height:.11rem;
      position: absolute;
      right:0;
    }
  `
})

const Detail=styled.div`
  ${bg}
  >div:nth-child(2){
    padding:0 .15rem;
    >ul{
      >li:last-child::after{
        border:none;
      }
    }
  }
`

const InputBar=border({
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
  Detail,
  InputBar,
  AskContainer,
  InputContainer,
  InputBorder,
  SearchContainer
}