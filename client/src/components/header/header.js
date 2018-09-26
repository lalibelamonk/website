import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../menu/menu';
import * as compositionsActions from '../../actions/compositionsActions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.loadCompositions = this.loadCompositions.bind(this);
        this.loadCompositions(); // FUTURE: move this somewhere else???
    }

    loadCompositions() {
        this.props.actions.getCompositions();
    }

    render() {
        return (
            <div className="header-container">
                <div className="name-header">
                    <a href="/" className="plain-link ">
                        ELHURST {/* FUTURE: turn these static messages into config variables? */}
                    </a>
                </div>
                <Menu></Menu>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...compositionsActions}, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Header);