import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Composition extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.updateModalComp(this.props.composition);
    }

    render() {
        return (
            <Card onClick={this.handleClick}>
                <CardImg top width="100%" src={this.props.composition.image} />
                <CardBlock>
                    <CardTitle>{this.props.composition.name}</CardTitle>
                </CardBlock>
            </Card>
        );
    }
}

export default connect(null, null)(Composition);