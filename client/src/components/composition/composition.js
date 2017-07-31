import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import * as compositionsActions from '../../actions/compositionsActions';
import './composition.css';

class Composition extends Component {
    constructor(props) {
        super(props);
        this.loadCompositions = this.loadCompositions.bind(this);
        this.loadCompositions();
    }

    loadCompositions() {
        this.props.actions.getCompositions();
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.composition.image} />
                    <CardBlock>
                        <CardTitle>{this.props.composition.name}</CardTitle>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(compositionsActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Composition);