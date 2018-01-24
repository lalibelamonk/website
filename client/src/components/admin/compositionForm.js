import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as compositionsActions from '../../actions/compositionsActions';
import BoundInput from '../util/boundInput';


class CompositionForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {name: "", image: ""};
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }


    handleSubmit(event) {
        event.preventDefault();
        try {
            this.props.actions.createComposition(this.state);
        } catch (error) {
            alert('Failed to create composition');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Name</label>
                    <BoundInput data={this.state.name} onChange={this.handleChange}></BoundInput>
                </p>
                <p>
                    <label>Image</label>
                    <BoundInput data={this.state.image} onChange={this.handleChange}></BoundInput>
                </p>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(compositionsActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(CompositionForm);