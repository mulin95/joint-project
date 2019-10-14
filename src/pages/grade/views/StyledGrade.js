import styled from 'styled-components'
import border from '../../../components/styled/border' 

const GradeContainer=border({
   width:'0 0 1px 0',
   comp:styled.div`
      padding:0 .15rem;
      background:#fff;
      height:100%;
      .select{
          color:#333333;
          font-size:.24rem;
          padding-top:.23rem;
      }
      .classification{
          padding-top:.31rem;
          .title{
            color:#4396FF;
            font-size:.17rem;
          }
          >div{
              display:flex;
              justify-content:space-between;
              flex:1;
              button{
              width:.9rem;
              height:.3rem;
              text-align:center;
              line-height:.3rem;
              background:#C8E0FF;
              border-radius:.04rem;
              color:#2F8AFF;
              font-size:.14rem;
              border:1px solid #2F8AFF;
              margin-top:.28rem;
             }
          }
        }
        .back{
            width:82%;
            height:.4rem;
            background:linear-gradient(90deg,rgba(52,190,253,1) 0%,rgba(47,138,255,1) 100%);
            border-radius:1rem;
            border:none;
            color:#fff;
            margin-top:.6rem;          
        }
   `
})

export{
    GradeContainer
}