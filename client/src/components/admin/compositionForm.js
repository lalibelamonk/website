import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as compositionsActions from '../../actions/compositionsActions';
import BoundInput from '../util/boundInput';


class CompositionForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {name: "", description: "", dimension: "", materials: ""};
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    convertToJson(formData) {
        console.log(formData);
    }

    handleSubmit(event) {
        event.preventDefault();
        try {
            this.props.actions.createComposition({composition: this.state}).then(resp => {
                this.setState({name: "", description: "", dimension: "", materials: ""});
                alert("composition saved successfully");
            });
        } catch (error) {
            alert('Failed to create composition');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Name</label>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </p>
                <p>
                    <label>Description</label>
                    <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
                </p>
                <p>
                    <label>Materials</label>
                    <input name="materials" type="text" onChange={this.handleChange} />
                </p>
                <p>
                    <label>Dimension</label>
                    <input name="dimension" type="text" onChange={this.handleChange} />
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

/**
<input
                        name="image"
                        type="file"
                        disabled={false}
                        multiple={false}
                        accept="image/*"
                        style={{
                          width: 0.1,
                          height: 0.1,
                          opacity: 0,
                          overflow: 'hidden',
                          position: 'absolute',
                          zIndex: -1
                        }}
                        id="image"
                        onChange={e => {}}
                        className=""/>

                      <label
                        disabled={false}
                        className="btn btn-success"
                        htmlFor="image">
                        <span className="glyphicon glyphicon-cloud-upload" />
                        'Upload Files'
                      </label>
                </p>**/

export default connect(null, mapDispatchToProps)(CompositionForm);