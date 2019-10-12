import React, { PureComponent} from 'react'

import ListUI from 'components/list/ListUI'

class All extends PureComponent {
    render() {
        console.log(this)
        return (
            <ListUI list={this.props.list}>

            </ListUI>
        )
    }
}

export default All