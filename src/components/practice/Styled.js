import styled from 'styled-components';

const smlFont=`
  font-size:.11rem;
  line-height:.16rem;
  color:#999;
`
const center=`
  display:flex;
  align-items:center;
  justify-content:center;
`

const CollectionContainer=styled.div`
  width:.5rem;
  height:.2rem;
  border-radius:.04rem;
  border:1px solid #CFCFCF;
  ${center}
  img{
    width:.14rem;
    height:.14rem;
    font-size:0;
  }
  p{
    ${smlFont}
  }
`

export {
  CollectionContainer
}