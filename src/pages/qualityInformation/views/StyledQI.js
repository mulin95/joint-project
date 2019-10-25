import styled from 'styled-components'
import border from '../../../components/styled/border'

const Div=styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    flex: 1;
    overflow:hidden;
    position:relative;
`

const QIContainer=styled.div`
    background:#fff;
    .btn{
        background:#E9E9E9;
        border-radius:.04rem;
        padding:.01rem .18rem;
        img{
            width:.13rem;
            height:.14rem;
        }
    }
`
const ContentsContainer=styled.div`
  overflow-y:scroll;
  flex:1;
  flex-direction: column;
  background:#fff;
`

const SwiperContainer=border({
    width:'0 0 1px 0',
    comp:styled.div`
      padding:.2rem .15rem 0;
      width:100%;
      height:2.64rem;
      ul{
        height:.65rem;
        display:flex;
        justify-content:space-between;
        margin-top:.1rem;
        li{
          font-size:.11rem;
          color:#999;
          display:flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          img{
          width:.35rem;
          height:.35rem;
          margin-bottom:.1rem;
          }
        }
      }
    `
    
  })
  
  //轮播图样式 
  const Swiperr=styled.div`
   img{
       width:100%;
       height:1.5rem;
   }
   .slider.am-carousel.my-carousel {
      height: 0 !important;
      padding-bottom: 43.478% !important;
      .slider-list {
        padding-bottom: 43.478% !important;
      }
    }
  `

const Main=styled.div`
display:flex;
flex-direction:column;
padding:.1rem .15rem;
background:#fff;
.topBar{
  width:100%;
  height:.4rem;
  img{
    width:100%;
    height:.4rem;
  }
}
`
const Detaill=border({
    width:'0 0 1px 0',
    comp:styled.div`
      display:flex;
      /* width:100%; */
      padding:.09rem 0 .15rem;
      img{
        width:.62rem;
        height:.76rem;
      }
      .msg{
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        padding-left:.05rem;
        .ti{
          font-size:.14rem;
          color:#333333;
        }
        .grade{
          width:.6rem;
          color:#2F8AFF;
          font-size:.11rem;
          padding:.02rem .08rem;
          background:#C8E0FF;
          border-radius:.02rem;
        }
        .advantage{
          color:#999999;
          font-size:.11rem;
        }
      }
  `
})

export{
    QIContainer,
    ContentsContainer,
    SwiperContainer,
    Swiperr,
    Main,
    Div
}