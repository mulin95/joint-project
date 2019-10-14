import styled from 'styled-components'

const ListContainer = styled.div`
    position: absolute;
    background: #fff;
    top:0;
    left:0;
    height:100%;
    width:100%;
    ul {
        height: 1.15rem;
        width: 100%;
        position: relative;
        li {
            margin: 0 .15rem;
            padding: .10rem 0 .17rem;
            img {
                width: .62rem;
                height: .76rem;
                float:left;
                margin-right: .15rem;
            }
            h3 {
                font-size: .14rem;
                color: #666;
            }
            b {
                width: .60rem;
                height: .20rem;
                display: inline-block;
                background: #c8e0ff;
                font-size: .11rem;
                color: #999;    
                margin: .12rem 0 .08rem;
                border-radius: 10%;
                text-align: center;      
            }
            p {
                .cate {
                    float: left;
                    font-size: .11rem;
                    color: #999;   
                    line-height: .17rem;                    
                }
                .price {
                    float: right;
                    font-size: .11rem;
                    color: #ff5c2f;
                    margin-right: .18rem;
                    line-height: .17rem;                    
                    span {
                        font-size: .17rem;
                    }
                }
                .VIPprice {
                    float: right;
                    color: #2F8AFF;
                    font-size: .11rem;
                    line-height: .17rem;                    
                }
            }
            .total {
                font-size: .17rem;
                color: #333;
                position: absolute;
                top: .1rem;
                right: .15rem;
            }
        }
    }
`

export default ListContainer