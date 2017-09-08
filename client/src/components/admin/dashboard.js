import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormGroup, Col, FormText, Input, Button } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './login'
import * as sessionUtils from '../../util/session';
import * as sessionActions from '../../actions/sessionActions';
import 'react-tabs/style/react-tabs.css';
//import './checkout.css';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.tabList = this.tabList.bind(this);
        this.tabPanels = this.tabPanels.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    logIn(credentials) {
        var self = this;
        this.props.actions.logIn(credentials).then(function() {
            self.forceUpdate();
        });
    }

    tabList() {
        if(sessionUtils.isSessionActive()) {
            return ['General', 'New Composition'];
        } else {
            return ['Login'];
        }
    }

    tabPanels() {
        if(sessionUtils.isSessionActive()) {
            return (
                <div>
                <TabPanel>
                    <div>General</div>
                </TabPanel>
                <TabPanel>
                    <div>New Composition</div>
                </TabPanel>
                </div>
            )
        } else {
            return (
                <TabPanel>
                    <Login logIn={this.logIn}></Login>
                </TabPanel>
            )
        }
    }

    render() {
        return (
            <Tabs>
                <TabList>
                    {this.tabList().map((tab) => {
                        return (<Tab key={tab}>{tab}</Tab>);
                    })}
                </TabList>

                {this.tabPanels()}
            </Tabs>
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);