import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FontAwesome from 'react-icons/lib/fa';
import * as headerActions from '../../actions/headerActions';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.actions.toggleMenu();
    }

    render() {
        let classes = "menu-container";
        if (!this.props.menuOpen) {
            classes += " hidden";
        }
        return (
            <div className={classes}>
                <ul className="menu">
                    <li>Prints</li>
                    <li>Paintings</li>
                    <li>Illustrations</li>
                    <li>Merch</li>
                </ul>
                <div className="modal" onClick={this.toggleMenu}></div>
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