import React from 'react'

import ListContainer from './StyledList'

const ListUI = (props) => {
    return (
        <ListContainer>
            <ul>
                <li>
                    <img src={props.list.topicImg} alt=""/>
                    <h3>
                        {props.list.topicName}
                    </h3>
                    <b>
                        {props.list.applyGrade}
                    </b>
                    <p>
                        <span className="cate">
                            {props.list.topicSketch}
                        </span>
                        <span className="VIPprice">
                            ￥{props.list.VIPPrice} VIP
                        </span>
                        <span className="price">
                            ￥
                            <span>
                            {props.list.price}
                            </span>
                        </span>
                    </p>
                    <div className="total">
                        X {props.list.topicNumber}
                    </div>
                </li>
            </ul>
        </ListContainer>
    )
}

export default ListUI