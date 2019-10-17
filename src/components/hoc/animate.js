import React from 'react'

import { CSSTransition } from 'react-transition-group'

export default (Comp) => {
    return class extends React.PureComponent {
        render () { 
            let match = this.props.match
            let dir = this.props.location.search.replace('?dir=', '')
            console.log(this.props)
            return (
            <CSSTransition
            in={!!match}
            timeout={1000}
            classNames={{
                enter: 'animated',
                enterActive: dir === 'left' ? 'slideInLeft' : 'slideInRight',
                exit: 'animated',
                exitActive: dir === 'left' ? 'slideOutRight' : 'slideOutLeft'
            }}
            unmountOnExit
            mountOnEnter
            onEntered={() => {
            }}
            onExit={() => {
            }}
            >
            <Comp list={this.props.list}></Comp>
            </CSSTransition>
            )
        }
    }
}