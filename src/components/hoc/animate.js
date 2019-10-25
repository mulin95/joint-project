import React from 'react'

import { CSSTransition } from 'react-transition-group'

import connect from './connect'

let Animated = (Comp) => {
    return connect( class extends React.PureComponent {
        render () { 
            let match = this.props.match
            let dir = this.props.dir
            return (
            <CSSTransition
            in={!!match}
            timeout={1000}
            classNames={{
                enter: 'animated',
                enterActive: dir ? (dir === 'left' ? 'slideInRight' : 'slideInLeft') : '',
                exit: 'animated',
                exitActive: dir ? (dir === 'left' ? 'slideOutLeft' : 'slideOutRight') : ''
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
    })
}

export default Animated