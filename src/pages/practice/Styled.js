import styled from 'styled-components';

const bg=`
height:100%;
display:flex;
flex-direction:column;
background:#fff;
>div:nth-child(2){
  flex:1;
  overflow-y:scroll;
}
`

const TopicContainer=styled.div`
  ${bg}
  .container{
    padding:0 .1rem;
    img{
      width:100%;
    }
  }
`
const CollectContainer=styled.div`
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

const SubjectContainer=styled.div`
  ${bg}
  >div:nth-child(2){
    padding:0 .15rem;
    h2{
      color:#333333;
      font-size:.17rem;
      line-height:.24rem;
      padding:.07rem 0;
      font-weight:400;
    }
    >div{
      position: relative;
      >img{
        width:100%;
      }
      >div{
        position: absolute;
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        top:0;
        >div{
          height:.2rem;
          display:flex;
          align-items:center;
        }
        p{ 
          color:#fff;
          font-size:.14rem;
          line-height:.14rem;
          font-weight:400;
          padding:0 .06rem;
          &:first-child{
            border-right:1px solid #fff;
          }
        }
        button{
          width:1.6rem;
          height:.39rem;
          background:url(${props=>props.btn});
          background-size:100%;
          border:none;
          margin-top:.24rem;
          font-size:.17rem;
          color:#fff;
        }
      }
      
    }
  }

`

export{
  SubjectContainer,
  CollectContainer,
  TopicContainer
}