import React, { Component } from 'react';

import TitleBack from 'components/titleBack/TitleBack'

class NoteShow extends Component {
    state = {
        id:'',
        title:'',
        text:''
    }
    render() {
        return (
            <div>
                <TitleBack title={this.state.title} />
                ID：  {this.state.id}<br/><br/>
                标题：{this.state.title}<br/><br/>
                内容：{this.state.text}<br/><br/>
            </div>
        );
    }
    componentDidMount(){
        const {query} = this.props.location;
        // console.log(this,query);
        this.setState({
            id:query.id,
            title:query.title,
            text:query.text
        })
    }
}

export default NoteShow;