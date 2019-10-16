import React, { Component } from 'react';

import {
    MemberOppenCom
} from './StyledMember'

import TitleBack from 'components/titleBack/TitleBack'
import ButtonCom from '../titleCom/ButtonCom'

class MemberOppen extends Component {
    render() {
        return (
            <MemberOppenCom>
                <TitleBack title="会了么会员" />
                MemberOppen
                <ButtonCom bottom="1"/>
            </MemberOppenCom>
        );
    }
}

export default MemberOppen;