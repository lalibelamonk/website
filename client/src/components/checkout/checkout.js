import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import * as compositionsActions from '../../actions/compositionsActions';
//import './checkout.css';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                CHECKOUT
            </div>
        );
    }
}

export default connect(null, null)(Checkout);