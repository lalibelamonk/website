import React, { Component } from 'react';

class EditableInput extends Component {
    constructor(props) {
        super(props);
        this.saveData = this.saveData.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: this.props.data[this.props.dataKey]
        };
    }

    saveData(value) {
        let newData = {}
        newData[this.props.dataKey] = value;
        this.props.onSave({...this.props.data, ...newData});
    }

    handleBlur(e) {
        this.saveData(e.target.value);
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

export default EditableInput;