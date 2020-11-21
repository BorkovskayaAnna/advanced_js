import React, { Component } from 'react';
import getComponentName from "../utils";

function withForm(BaseComponent) {
    class WithFormClass extends Component {
        constructor(props) {
            super(props);

            this.state = {
                data: props.initState,
                checked: false
            }
        }

        handleChange = ({ target }) => {
            this.setState({
                data: { ...this.state.data, [target.name]: target.data }
                }
            )
        }

        handleCheck = () => this.setState({checked: !this.state.checked })

        handleSubmit = e => {
            e.preventDefault();
            console.log(this.state);
            this.setState({ data: this.props.initState }, this.checked)
        }

        render() {
            return (
                <BaseComponent
                    { ...this.props }
                    handleChange = {this.handleChange}
                    handleCheck = {this.handleCheck}
                    handleSubmit = {this.handleSubmit}
                    { ...this.state }
                />
            )
        }
    }
    // not necessary functionality block
    /*WithFormClass.displayName = `WithFormClass(${getComponentName(
        BaseComponent
    )})`*/

    return WithFormClass;
}

export default withForm;


