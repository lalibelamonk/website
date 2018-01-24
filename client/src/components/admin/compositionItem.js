import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoundInput from '../util/boundInput';
import { bindActionCreators } from 'redux';
import { FaTrashO, FaLock, FaUnlock } from 'react-icons/lib/fa';
import * as compositionsActions from '../../actions/compositionsActions';


class CompositionItem extends Component {
    constructor(props) {
        super(props);
        this.saveComposition = this.saveComposition.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
        this.state = {
            editable: false
        }
    }

    toggleEditable() {
        this.setState({
            editable: !this.state.editable
        });
    }

    saveComposition(data) {
        try {
            this.props.actions.saveComposition(data);
        } catch (error) {
            alert('Failed to save composition');
        }
    }

    render() {
        return (
            <tr>
                <td onClick={this.toggleEditable}>
                    <FaLock hidden={this.state.editable}/>
                    <FaUnlock hidden={!this.state.editable} />
                </td>
                <td>
                    <BoundInput data={this.props.comp.name}></BoundInput>
                </td>
                <td>
                    <BoundInput data={this.props.comp.image}></BoundInput>
                </td>
                <td><FaTrashO /></td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(compositionsActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        compositions: state.compositions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompositionItem);