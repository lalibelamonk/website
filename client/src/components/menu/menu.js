import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
    constructor(props) {
        super(props);
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
                    <br />
                    <li>Merch</li>
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

export default connect(mapStateToProps, null)(Menu);