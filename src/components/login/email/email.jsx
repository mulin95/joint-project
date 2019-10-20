import React, { Component } from 'react'
import EmailContainer from './emailStyled'
import { withRouter } from 'react-router-dom'

class Email extends Component {
   render() {
      return (
           
            <EmailContainer>
                <img onClick={this.skipToEmail} src={this.props.src} alt=""/>
            </EmailContainer>
           
      )
   }

   skipToEmail=() => {
      
       this.props.history.push("/login/email");
   }
}

export default withRouter(Email)