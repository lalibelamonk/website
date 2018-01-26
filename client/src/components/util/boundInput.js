import React, { Component } from 'react';

class BoundInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            key: Object.keys(props.data)[0],
            value: Object.values(props.data)[0]
        };
    }

    handleChange(e) {
        let data = {};
        data[this.state.key] = e.target.value;
        this.setState({
            value: e.target.value
        });
        this.props.update(data);
    }

    render() {
        return (
            <input value={this.state.value} onChange={this.handleChange} />
        )
    }
}

export default BoundInput;