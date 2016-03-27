/**
 * Created by invader on 27.03.16.
 */

import React from 'react'

export default class MobileCheck extends React.Component {
    render() {

        let userAgent = window.navigator.userAgent,
            device = {};

        if (/mobile/i.test(userAgent))
            device.Mobile = true;

        let component;

        if(!$.Mobile) {
            component = this.props.children
        }

        return {component};
    }
}