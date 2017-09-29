import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaTrashO } from 'react-icons/lib/fa';


class CompositionList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                {
                    this.props.compositions.map((comp, idx) => {
                        return (
                            <tr>
                                <td>{comp.name}</td>
                                <td>{idx}</td>
                                <FaTrashO />
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

function mapStateToProps(state, ownProps) {
    return {
        compositions: state.compositions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompositionList);