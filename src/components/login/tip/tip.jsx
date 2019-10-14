import React ,{PureComponent} from 'react'
import TipContainer from './tipStyle'

 class Tip extends PureComponent{
     constructor(){
         super()
     }
    render(){
        return (
            <TipContainer>{this.props.text}</TipContainer>
        )
    }
}
export default Tip