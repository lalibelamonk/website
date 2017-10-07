import React, { Component } from 'react';
import { connect } from 'react-redux';

class Composition extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.updateModalComp(this.props.composition);
    }

    render() {
        return (
            <div onClick={this.handleClick} className="card">
                <img width="100%" src={this.props.composition.image} />
            </div>
        );
    }
}

export default connect(null, null)(Composition);