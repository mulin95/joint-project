import React, { PureComponent } from 'react'

import {Swiperr} from './StyledContents'

import { Carousel } from 'antd-mobile'

export default class Swiper extends PureComponent {
    render() {
        return (
          <Swiperr>
            {this.props.list&&this.props.list.length > 0 && (<Carousel className="my-carousel"
              dots={true}
              dragging={true}
              swiping={true}
              autoplay
              infinite
            >
              {
                this.props.list.map((value, index) => (
                  <img key={value.id} src={value.rotationImg} alt=""/>
                ))
              }
            </Carousel>)
          }
          </Swiperr>
        )
      }
    
}
