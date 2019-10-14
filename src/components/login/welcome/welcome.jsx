import React, { Component } from 'react'
import Welcome from './styleLogin'

class welcome extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <Welcome>
                {this.props.text}
            </Welcome>
        )
    }


}
export default welcome