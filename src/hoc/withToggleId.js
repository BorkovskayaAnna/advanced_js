import React, { Component } from 'react';

export default Container =>
    class withToggled extends Component {
        state = {
            openId: false
        }

        toggle = id =>
            this.setState(({ openId }) => ({
                openId: openId === id ? null : id
            }))

        render() {
            return <Container {...this.props} {...this.state} toggle={this.toggle} />
        }
    }

