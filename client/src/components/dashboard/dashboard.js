/**
 * Created by Nick on 5/10/17.
 * cannot test as needs app for store to context
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log('rendered');
        return (
            <div>HELLO ROSESMELL</div>
        );
    }
}

export default connect(null, null)(Dashboard);



