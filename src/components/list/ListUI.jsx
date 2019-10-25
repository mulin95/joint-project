import React from 'react'
import empty from 'images/empty.png'

import {ListContainer, Buttons} from './StyledList'


const ListUI = (props) => {
    return (
        <ListContainer>
            <ul>
                {
                    props.list.length > 1 ? props.list.map((li,index) => <li 
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
                        </li>) :<> 
                        <img src={empty} alt=""/>
                        <p>您好，这里还没有内容</p>
                        <Buttons>
                            <p>再去逛逛</p>
                        </Buttons>
                        </>
                }
                
            </ul>
        </ListContainer>
    )
}

export default ListUI