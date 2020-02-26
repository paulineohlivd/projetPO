import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, Form
  } from 'react-bootstrap';

class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            message:'Laissez moi un petit mot'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
      
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? 
        target.checked : target.value;
        const name = target.name;
        

        this.setState({
            [name]: value
          });
        }

        render() {
            return (
              <form id="formulaireContact">
                  <Form.Group controlId="formBasicNom">
                     <Form.Control 
                        type="text" 
                        placeholder="Votre nom" 
                        value={this.state.nom}
                        onChange={this.handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPrenom">
                     <Form.Control 
                        type="text" 
                        placeholder="Votre prenom" 
                        value={this.state.prenom}
                        onChange={this.handleInputChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicMessage">
                     <Form.Control as="textarea" rows="4"
                        placeholder="Votre message" 
                        value={this.state.message} 
                        onChange={this.handleInputChange} />
                  </Form.Group>
              </form>
        );
    }
}

export default FormContact;
