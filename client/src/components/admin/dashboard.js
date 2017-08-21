import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormGroup, Col, FormText, Input, Button } from 'reactstrap';
import * as sessionActions from '../../actions/sessionActions';
//import './checkout.css';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            loggedIn: false,
            credentials: {}
        }
    }

    logIn() {
        this.props.actions.logIn(this.state.credentials);
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
                        <Button onClick={this.logIn}>Log In</Button>
                    </Col>
                </FormGroup>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        session: state.session
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);