import React ,{PureComponent} from 'react'
import TipContainer from './tipStyle'

 class Tip extends PureComponent{
    render(){
        return (
            <TipContainer>若该手机号未注册，我们将自动为你注册</TipContainer>
        )
    }
}
export default Tip