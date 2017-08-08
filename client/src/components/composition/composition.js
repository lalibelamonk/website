import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './composition.css';

class Composition extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.props.composition.image} />
                <CardBlock>
                    <CardTitle>{this.props.composition.name}</CardTitle>
                </CardBlock>
            </Card>
        );
    }
}

export default connect(null, null)(Composition);