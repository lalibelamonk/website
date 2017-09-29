import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as compositionsActions from '../../actions/compositionsActions';
import * as FontAwesome from 'react-icons/lib/fa';

class Header extends Component {
    constructor(props) {
        super(props);
        this.loadCompositions = this.loadCompositions.bind(this);
        this.loadCompositions();
    }

    loadCompositions() {
        this.props.actions.getCompositions();
    }

    render() {
        return (
            <div className="header-container">
                <div className="name-header">
                    El Hurst
                </div>
                <div className="header-buttons">
                    <div className="header-icon search">
                        <FontAwesome.FaSearch />
                    </div>
                    <div className="header-icon menu">
                        <FontAwesome.FaBars />
                    </div>
                </div>
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