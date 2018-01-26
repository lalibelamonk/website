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
        this.updateField = this.updateField.bind(this);
        this.state = {
            editable: false,
            composition: this.props.comp
        }
    }

    updateField(data) {
        let newComp = {...this.state.composition, ...data}
        this.setState({
            composition: newComp
        });
        //TODO don't do this automatically. Create a save/cancel button that appears when field is updated. 
        this.saveComposition(newComp)
    }

    saveComposition(data) {
        try {
            this.props.actions.saveComposition({composition: data});
        } catch (error) {
            alert('Failed to save composition');
        }
    }

    render() {
        let nameData = {name: this.state.composition.name};
        let imageData = {name: this.state.composition.image};
        return (
            <tr>
                <td>
                    <BoundInput data={nameData} update={this.updateField}></BoundInput>
                </td>
                <td>
                    <BoundInput data={imageData} update={this.updateField}></BoundInput>
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