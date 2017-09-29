import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu-container">
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

export default connect(null, null)(Menu);