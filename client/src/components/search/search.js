import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FontAwesome from 'react-icons/lib/fa';
import * as headerActions from '../../actions/headerActions';
import BoundInput from '../util/boundInput';

class Search extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            search: ""
        }
    }

    toggleMenu(e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.actions.toggleMenu();
    }

    render() {
        let inputProps = {id: "search", placeholder: "Searchy search"};
        return (
            <div className="header-search">
                <BoundInput inputProps={inputProps} data={this.state.search} onChange={this.updateSearch}></BoundInput>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);