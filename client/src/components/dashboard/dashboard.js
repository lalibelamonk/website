import React, {Component} from 'react';
import {connect} from 'react-redux';
import Composition from '../composition/composition.js';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section className="main">
                    <div className="dashboard-image"></div>
                </section>
                );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        compositions: state.compositions
    };
}

export default connect(mapStateToProps, null)(Dashboard);



