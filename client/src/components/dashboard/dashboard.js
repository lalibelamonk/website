import React, {Component} from 'react';
import {connect} from 'react-redux';
import Composition from '../composition/composition.js';
import { Row, CardDeck } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.updateModalComp = this.updateModalComp.bind(this);
        this.state = {
            modalOpen: false,
            modalComp: null
        };
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    updateModalComp(composition) {
        this.setState({
            modalComp: composition,
            modalOpen: true
        });
    }

    getModalImage() {
        if(this.state.modalComp) {
            return this.state.modalComp.image;
        } else {
            return null;
        }
    }

    getModalTitle() {
        if(this.state.modalComp) {
            return this.state.modalComp.name;
        } else {
            return null;
        }        
    }

    render() {
        let comps = this.props.compositions.map((composition) => {
                        let props = {
                            composition: composition,
                            updateModalComp: this.updateModalComp
                        }
                        return <div key={composition.name} className="comp-container">
                                <Composition {...props}></Composition>
                                </div>
                    });
        return (<div>
                    {comps}
                    <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{this.getModalTitle()}</ModalHeader>
                        <ModalBody>
                            <img src={this.getModalImage()} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggle}>Buy Print</Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>
                );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        compositions: state.compositions
    };
}

export default connect(mapStateToProps, null)(Dashboard);



