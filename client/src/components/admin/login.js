import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Col, FormText, Input, Button } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.state = {
            credentials: {}
        }
    }

    handleLogIn() {
        this.props.logIn(this.state.credentials);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }

    render() {
        return (
            <form className="login">
                <FormGroup row className="no-gutters">
                    <Col className="offset-4" sm={{ size: 4, offset: 4 }}>
                        <Input ref="username" type="text" name="username" id="username" placeholder="..." onChange={this.onChange}/>
                        <FormText>Username</FormText>
                    </Col>
                </FormGroup>
                <FormGroup row className="no-gutters">
                    <Col className="offset-4" sm={{ size: 4, offset: 4 }}>
                        <Input ref="password" type="password" name="password" id="password" placeholder="..." onChange={this.onChange}/>
                        <FormText>Password</FormText>
                    </Col>
                </FormGroup>
                <FormGroup check row className="no-gutters">
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Button onClick={this.handleLogIn}>Log In</Button>
                    </Col>
                </FormGroup>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

function mapStateToProps(state, ownProps) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);