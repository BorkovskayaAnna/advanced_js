import React, { Component } from 'react';

export default Container =>
    class withToggle extends Component {
    state = {
        isOpen: false
    }

    toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
        
    render() {
       return <Container {...this.props} {...this.state} toggle={this.toggle} />
    }
}

