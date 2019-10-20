import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import backImg from 'images/back.png'
import TitleCom from './StyledTitle';

class TitleHeader extends Component {
    render() {
        return (
            <TitleCom>
                <div >
                    {
                        this.props.text?
                        (
                            <div className="textLeft" onClick={this.goBack}>
                                返回
                            </div>
                        )
                        :
                        (
                            <div className="iconLeft" onClick={this.goBack}>
                                <img src={backImg} alt=""/>
                            </div>
                        )
                    }
                    {
                        this.props.title || ''
                    }
                    {
                        this.props.children ? 
                        (
                            <div className="textRight">
                                {this.props.children}
                            </div>
                        )
                        :''
                    }
                </div>
            </TitleCom>
        );
    }
    goBack=()=>{
        this.props.history.goBack();
    }
}

export default withRouter(TitleHeader);