import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoundInput from '../util/boundInput';
import { bindActionCreators } from 'redux';
import { FaTrashO, FaCheckCircle, FaTimesCircle } from 'react-icons/lib/fa';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import * as compositionsActions from '../../actions/compositionsActions';


class CompositionItem extends Component {
    constructor(props) {
        super(props);
        this.saveComposition = this.saveComposition.bind(this);
        this.updateField = this.updateField.bind(this);
        this.discardChanges = this.discardChanges.bind(this);
        this.deleteComposition = this.deleteComposition.bind(this);
        this.state = {
            altered: false,
            composition: this.props.comp
        }
    }

    updateField(data) {
        let newComp = {...this.state.composition, ...data}
        this.setState({
            altered: true,
            composition: newComp
        });
    }

    saveComposition() {
        try {
            this.props.actions.saveComposition({composition: this.state.composition});
        } catch (error) {
            alert('Failed to save composition');
        }
        this.setState({
            altered: false
        });
    }

    discardChanges() {
        this.setState({
            altered: false,
            composition: this.props.comp
        });
    }

    deleteComposition() {
        let name = this.state.composition.name;
        let id = this.state.composition.id;
        confirmAlert({
              title: 'Delete ' + name,
              message: 'Are you sure?',
              confirmLabel: 'Confirm',
              cancelLabel: 'Cancel',
              onConfirm: () => this.props.actions.deleteComposition(id)
        });
    }

    render() {
        let nameData = {name: this.state.composition.name};
        let imageData = {image: this.state.composition.image};
        return (
            <tr>
                <td>
                    <BoundInput data={nameData} update={this.updateField}></BoundInput>
                </td>
                <td>
                    <BoundInput data={imageData} update={this.updateField}></BoundInput>
                </td>
                <td>
                    <span className={this.state.altered ? '' : 'hidden'}>
                        <FaCheckCircle onClick={this.saveComposition} />
                        <FaTimesCircle onClick={this.discardChanges} />
                    </span>
                    <FaTrashO onClick={this.deleteComposition} />
                </td>
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