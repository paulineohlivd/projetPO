import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
import './index.css';
import { useState } from 'react';
import FormContact from './FormContact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal
} from 'react-bootstrap';


function FormModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i className="fas fa-envelope" onClick={handleShow}></i>

            <Modal id="modale" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>On reste en contact ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Envoyez moi un petit message !</Modal.Body>
                    
                <FormContact></FormContact>

            </Modal>
        </>
    );
}

export default FormModal;
