import React, { Component } from 'react';

class BoundInput extends Component {
    constructor(props) {
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: this.props.data
        };
    }

    handleBlur(e) {
        if(this.props.onSave) {
            this.saveData(e.target.value);
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        let handlers = {
            onBlur: this.handleBlur,
            onChange: this.handleChange
        }
        return (
            <input value={this.state.value} {...handlers} >
            </input>
        )
    }
}

export default BoundInput;