import React, { Component } from 'react';

class BoundInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.getValue = this.getValue.bind(this);
        this.getKey = this.getKey.bind(this);
    }

    getValue() {
        return Object.values(this.props.data)[0];
    }

    getKey() {
        return Object.keys(this.props.data)[0];
    }

    handleChange(e) {
        let data = {};
        data[this.getKey()] = e.target.value;
        this.props.update(data);
    }

    render() {
        return (
            <input {...this.props.inputProps} value={this.getValue()} onChange={this.handleChange} />
        )
    }
}

export default BoundInput;