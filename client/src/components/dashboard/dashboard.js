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



