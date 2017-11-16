import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as compositionsActions from '../../actions/compositionsActions';
import CompositionItem from './compositionItem';


class CompositionList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.props.compositions.map((comp, idx) => {
                        return (
                            <CompositionItem comp={comp} key={idx}/>
                        );
                    })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        compositions: state.compositions
    };
}

export default connect(mapStateToProps, null)(CompositionList);