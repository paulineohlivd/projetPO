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
            message:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
         
    }

    handleInputChange(event) {
        /*const target = event.target;
        const value = target.type === 'checkbox' ? 
        target.checked : target.value;
        const name = target.name;*/ 

        this.setState({nom: event.target.nom});
        this.setState({prenom: event.target.prenom});
        this.setState({message: event.target.message});  
        }

        handleSubmit(event){
            alert('Votre message est' + this.state.message);
            event.preventDefault();
        }

        render() {
            return (
                <div>
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
                        name="message"
                        placeholder="Votre message" 
                        value={this.state.message} 
                        onChange={this.handleInputChange} />
                  </Form.Group>
                </div>
    
        );
    }
}

export default FormContact;
