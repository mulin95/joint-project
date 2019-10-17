import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
import ButtonContainer from './StyleButton'

class ButtonCom extends Component {
    render() {
        return (
            <ButtonContainer 
                style={{bottom:this.props.bottom + 'rem'}}
                onClick={()=>this.props.clickBtn && this.props.clickBtn()}
                >
                <div>
                    <span>
                        {this.props.title || '立即开通'}
                    </span> 
                </div>
            </ButtonContainer>
        );
    }
}

export default withRouter(ButtonCom);