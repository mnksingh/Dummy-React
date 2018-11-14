import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function (props) {

    return (
        <div className="static-modal">
            <Modal show={props.showPopup}>
                <Modal.Header>
                    <Modal.Title>Add new Phone Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <FormGroup controlId="phone-number">
                            <ControlLabel>Phone Number</ControlLabel>
                            <FormControl type="text" placeholder="Phone Number" />
                        </FormGroup>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel> Phone Type</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Select</option>
                                <option value="other">Cell</option>
                            </FormControl>
                        </FormGroup>
                    </form>
                    {props.showCellContent ? (<div>
                        HELLO
    </div>) : false}

                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.closePopup}>Close</Button>
                    <Button bsStyle="primary" onClick={props.toggleCellContent}>Submit Phone Details</Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
} 