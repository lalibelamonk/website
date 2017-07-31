import React, {Component} from 'react';
import {connect} from 'react-redux';
import Composition from '../composition/composition.js';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if(this.props.compositions) {
            return (
                <div>
                    <div>HELLO ROSESMELL</div>
                    (this.props.compositions){ this.props.compositions.map(comp =>
                        <Composition composition={comp} />
                    )}
                </div>
            );
        } else {
            return <div>No Compositions</div>;
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        compositions: state.compositions
    };
}

export default connect(mapStateToProps, null)(Dashboard);



