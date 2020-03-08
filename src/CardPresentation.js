import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormModal from './FormModal';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal
  } from 'react-bootstrap';
 
function CardPresentation(props) {
  return (
        // Render a Thumbnail component
        <Card  id="cardPres">
        <Card.Body>
            <Card.Img variant="top" src="./photoid.jpg" style={{ width: '5rem' }} />
            <Card.Title></Card.Title>
            <Card.Text>
               La chimiste au devant du digital !<br></br>

               Après 10 ans d’expériences dans la chimie, je veux donner un nouvel élan à ma carrière et me tourner vers l’avenir !!<br></br>
               Le digital m’attire depuis longtemps, j’ai saisi l’opportunité de mon retour en France après un passage de 2 ans à l’étranger pour me lancer dans ce nouveau challenge ! 
               Actuellement en formation à l'ENI, j'effectue un stage à partir de Mars en ReactJS et Symfony. !<br></br>
               Ma capacité d’adaptabilité éprouvée durant ma carrière sera un atout pour ce nouveau challenge que j’ai bien l’intention de surmonter ! 
                  
         </Card.Text>
         <Button variant="primary">En savoir plus</Button><br></br>
         <a href="https://github.com/paulineohlivd?tab=repositories" target="_blank"><i className="fab fa-github"></i></a>
         <a href="https://www.linkedin.com/feed/" target="_blank"><i className="fab fa-linkedin"></i></a>
         <FormModal id="modale"></FormModal>
         
       </Card.Body>
     </Card>
  );
}   

export default CardPresentation;
