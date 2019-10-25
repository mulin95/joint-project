import React from 'react'

import ListContainer from './StyledList'

const ListUI = (props) => {
    return (
        <ListContainer>
            <ul>
                {
                    props.list ? props.list.map((li,index) => <li 
                        key={"d" + index}
                        onTouchStart = {props.onTouchStart}
                        onTouchMove = {props.onTouchMove}
                        onTouchEnd = {props.onTouchEnd}
                        >
                            <img src={li.topicImg} alt=""/>
                            <h3>
                                {li.topicName}
                            </h3>
                            <b>
                                {li.applyGrade}
                            </b>
                            <p>
                                <span className="cate">
                                    {li.topicSketch}
                                </span>
                                <span className="VIPprice">
                                    ￥{li.VIPPrice} VIP
                                </span>
                                <span className="price">
                                    ￥
                                    <span>
                                    {li.price}
                                    </span>
                                </span>
                            </p>
                           {li.topicNumber ? <div className="total">
                                X {li.topicNumber}
                            </div> : ""}
                        </li>) : ""
                }
                
            </ul>
        </ListContainer>
    )
}

export default ListUI