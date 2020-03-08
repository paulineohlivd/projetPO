import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, Form
  } from 'react-bootstrap';
import axios from 'axios';

const API_PATH = 'http://localhost/projetPO/api/contact/index.php';

class FormContact extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            nom: '',
            email:'',
            message:'',
            mailSent: false,
            error: null
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
        this.setState({prenom: event.target.email});
        this.setState({message: event.target.message});  
        }

        handleSubmit(event){
            event.preventDefault();
            console.log(this.state);
            console.log(API_PATH);
            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: this.state
              })
                .then(result => {
                  this.setState({
                    mailSent: result.data.sent
                  })
                })
                .catch(error => this.setState({ error: error.message }));
            };
        

        render() {
            return (
                <Form id="formulaireContact" action="#">
                     <Form.Group controlId="formBasicNom">
                     <Form.Control 
                        type="text" 
                        placeholder="Votre nom" 
                        value={this.state.nom}
                        onChange={e => this.setState({ nom: e.target.value })} />
                  </Form.Group>

                  <Form.Group controlId="formBasicMail">
                     <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Votre email" 
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicMessage">
                     <Form.Control as="textarea" rows="4"
                        name="message"
                        placeholder="Votre message" 
                        value={this.state.message} 
                        onChange={e => this.setState({ message: e.target.value })} />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={e => this.handleSubmit(e)} value="Submit"> 
                    Envoyer
                 </Button> 
                    <div>
                        {this.state.mailSent &&
                    <div>Thank you for contcting us.</div>
                        }
                    </div>
                </Form>
    
        );
    }
}

export default FormContact;
