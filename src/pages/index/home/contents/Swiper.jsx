import React, { PureComponent } from 'react'

import {Swiperr} from './StyledContents'

import { Carousel } from 'antd-mobile'
import http from 'utils/http'

export default class Swiper extends PureComponent {
    state = {
      swiperList: []
    }

    async componentDidMount() {
      let result = await http.get('/huileme/a/m/TopicController/homePage ')
      this.setState({
        swiperList: result.data.rotationchartList
      })
    }

    render() {
        return (
          <Swiperr>
            {this.state.swiperList.length > 0 && (<Carousel className="my-carousel"
              dots={true}
              dragging={true}
              swiping={true}
              autoplay
              infinite
            >
              {
                this.state.swiperList.map((value, index) => (
                  <img key={value.id} src={value.rotationImg} alt=""/>
                ))
              }
            </Carousel>)
          }
          </Swiperr>
        )
      }
    
}
