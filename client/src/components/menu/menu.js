import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FontAwesome from 'react-icons/lib/fa';
import * as headerActions from '../../actions/headerActions';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu-container">
                <ul className="menu">
                    <li className="menu-header">work</li>
                    <li className="menu-header">info</li>
                    <li className="menu-header">find me</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        menuOpen: state.menuOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(headerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);