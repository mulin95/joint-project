import React, { PureComponent} from 'react'

import ListUI from 'components/list/ListUI'

class All extends PureComponent {
    render() {
        return (
            <ListUI list={this.props.list}>

            </ListUI>
        )
    }
}

export default All