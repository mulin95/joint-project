import React, { Component } from 'react';

import ButtonCom from './titleCom/ButtonCom'
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';

class Service extends Component {
    render() {
        return (
            <div>
                Service
                <ButtonCom title="客服中心" bottom="1"/>

                <List style={{ backgroundColor: 'white' }} className="picker-list">
                <Picker extra="请选择(可选)"
                    data={district}
                    title="Areas"
                    // {...getFieldProps('district', {
                    //     initialValue: ['340000', '341500', '341502'],
                    // })}
                    onOk={e => console.log('ok', e)}
                    onDismiss={e => console.log('dismiss', e)}
                    >
                    <List.Item arrow="horizontal">Multiple & cascader</List.Item>
                </Picker>
                </List>

            </div>
        )
    }
    componentDidMount(){
        console.log(district)
    }
}

export default Service;