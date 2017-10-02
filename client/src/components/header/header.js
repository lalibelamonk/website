import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as compositionsActions from '../../actions/compositionsActions';
import * as FontAwesome from 'react-icons/lib/fa';
import * as headerActions from '../../actions/headerActions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.loadCompositions = this.loadCompositions.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.loadCompositions();
    }

    loadCompositions() {
        this.props.actions.getCompositions();
    }

    toggleMenu(e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.actions.toggleMenu();
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
                    <div className="header-icon menu" onClick={this.toggleMenu}>
                        <FontAwesome.FaBars />
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...compositionsActions, ...headerActions}, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Header);