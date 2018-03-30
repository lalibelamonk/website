import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as compositionsActions from '../../actions/compositionsActions';
import * as FontAwesome from 'react-icons/lib/fa';
import * as headerActions from '../../actions/headerActions';
import * as sessionActions from '../../actions/sessionActions';
import * as navUtils from '../../util/navigation';
import * as sessionUtils from '../../util/session';

class Header extends Component {
    constructor(props) {
        super(props);
        this.loadCompositions = this.loadCompositions.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.loadCompositions();
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    loadCompositions() {
        this.props.actions.getCompositions();
    }

    toggleMenu(e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.actions.toggleMenu();
    }

    handleLogOut() {
        this.props.actions.logOut();
    }

    headerButtons() {
        if(this.props.loggedIn && sessionUtils.isSessionActive() && navUtils.isAdminPage()) {
            return(
                <div className="header-buttons">
                    <a href="/" className="header-icon plain-link" onClick={this.handleLogOut}>
                        <FontAwesome.FaSignOut />
                    </a>
                </div>
            );
        } else {
            return(
                <div className="header-buttons">
                    <div className="header-icon search">
                        <FontAwesome.FaSearch />
                    </div>
                    <div className="header-icon menu" onClick={this.toggleMenu}>
                        <FontAwesome.FaBars />
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="header-container">
                <div className="name-header">
                    <a href="/" className="plain-link">
                        El Hurst
                    </a>
                </div>
                {this.headerButtons()}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...compositionsActions, ...headerActions, ...sessionActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);