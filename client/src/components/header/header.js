import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as compositionsActions from '../../actions/compositionsActions';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.loadCompositions = this.loadCompositions.bind(this);
        this.loadCompositions();
    }

    loadCompositions() {
        compositionsActions.getCompositions();
    }

    render() {
        return (
            <div className="header">
                Rosesmell Studios
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(compositionsActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Header);