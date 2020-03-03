import React from "react";
import Thumbnail from './Thumbnail.js';
import "./index.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import ContactLink from "./component/ContactLink.js";
import FollowIcon from "./component/FollowIcon.js";
import ResumeItem from "./component/ResumeItem.js";
import TimeRangeBlock from "./component/TimeRangeBlock.js";
import SkillBar from "./component/SkillBar.js";
import Interest from "./component/Interest.js";
import InterestItem from "./component/InterestItem.js";

const contactList = [
  {
    link: "tel:0608084632",
    icon: "fas fa-phone",
    children: <span>06 08 08 46 32</span>
  },
  {
    link: "",
    icon: "fas fa-map-marker",
    children: <span>Nantes, France</span>
  },
  {
    link: "mailto:pauline@olliveaud.fr",
    icon: "fas fa-envelope",
    children: <span>paulineolliveaud</span>
  },
  {
    link: "pauline.olliveaud.fr",
    icon: "fas fa-home",
    children: <span>pauline.olliveaud.fr</span>
  }
];

const followList = [
  {
    link: "https://www.linkedin.com/in/paulineolliveaud/",
    icon: "fab fa-linkedin"
  },
  {
    link: "https://github.com/paulineohlivd",
    icon: "fab fa-github"
  }
];

const education = [
  {
    startDate: new Date("2019-09"),
    endDate: new Date("2020-05"),
    title: "Formation Développeur Web et Web Mobile",
    children: (
      <>
        <p>ENI Ecole Informatique, Nantes</p>
      </>
    )
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2019"),
    title: "Formation en autonomie sur OpenClassRooms",
    children: (
      <>
        <p>OpenClassRooms</p>
      </>
    )
  },
  {
    startDate: new Date("2010-09"),
    endDate: new Date("2011-06"),
    title: "M2P Chimie Analytique et Instrumentation",
    children: (
      <>
        <p>Université P.Sabatier 3, Toulouse</p>
      </>
    )
  }
];

const experience = [
  {
    startDate: new Date("2019-09"),
    endDate: new Date("ongoing"),
    title: "Projets informatiques développés à l'ENI",
    children: (
      <>
        <p>ENI Ecole Informatique - Nantes (2019-2020)</p>
        <p>
          <ul>
          <li> Développement d’un site d’enchères sous Java EE et SQL Server </li>
          <li> Analyse, conception et développement d’un site d’organisation d’évènements d’entreprises avec JAVA EE et SQL Server / PHP et MySQL : définition de tests et d’outils de passage des tests.</li>
          </ul>
        </p>
      </>
    )
  },
  {
    startDate: new Date("2019-07"),
    endDate: new Date("2019-07"),
    title: "Stage d'observation",
    children: (
      <>
        <p>Stéréosuper - Nantes (Juillet 2019)</p>
        <ul>
          <li> Découvert du métier de développeur web Front End </li>
          <li> Utilisation d'outils de développement et librairies</li>
        </ul>
      </>
    )
  },
  {
    startDate: new Date("2019-05"),
    endDate: new Date("2019-06"),
    title: "Digital Job Ambition #3",
    children: (
      <>
        <p>Maison de l'emploi de Nantes (Mai à Juin 2019)</p>
        <ul>
          <li> Découverte de l’écosystème numérique : métiers, entreprises, écoles </li>
          <li> Techniques d'initiation: HTML, CSS, data, UX / UI, scrum </li>
          <li> Production d’un site web pour un client (association) </li>
          <li> Production de documents techniques (tutoriels)</li>
        </ul>
      </>
    )
  },
  {
    startDate: new Date("2017-03"),
    endDate: new Date("2019-02"),
    title: "Spécialiste Validation et Métrologie",
    children: (
      <>
        <p>Pfizer - Montréal (Mars 2017 à Février 2019)</p>
        <ul>
          <li> Expert Data Integrity : Assurance et maintien de l'intégrité et exactitude des données tout au long de leur cycle de vie dans l'usine </li>
        </ul>
      </>
    )
  },
  {
    startDate: new Date("2016-04"),
    endDate: new Date("2017-02"),
    title: "Chimiste Analytique",
    children: (
      <>
        <p>GIRPA - Angers (Avril 2016 à Février 2017)</p>
        <ul>
          <li> Réalisation de dossiers d'autorisation de mise sur le marché de nouveaux pesticides - Analyses et rédaction
Traitement de données brutes </li>
        </ul>
      </>
    )
  },
  {
    startDate: new Date("2012-02"),
    endDate: new Date("2016-03"),
    title: "Chargée secteur bactériologie des eaux",
    children: (
      <>
        <p>LDA56 - Saint-Avé (Avril 2016 à Février 2017)</p>
        <ul>
          <li> Encadrement équipe de 3 techniciens </li>
          <li> Analyses dans le cadre du contrôle sanitaire sur les eaux de réseau et de loisir du Morbihan</li>
        </ul>
      </>
    )
  },
];

const interests = [
  {
    icon: "fas fa-running"
  },
  {
    icon: "fas fa-theater-masks"
  },
  {
    icon: "fas fa-globe-africa"
  },
  {
    icon: "fas fa-music"
  }
];

function Carroussel() {

    return (
      <Carousel>
                {/* <Container>
                  <Row>
                    <Col xs={10}> */}
                  <div>
                    <p className="legend">Expériences</p>
                      <ResumeItem title="Expériences">
                       {experience.map(item => (
                    <TimeRangeBlock {...item} />
                   ))}
                       </ResumeItem>
                    {/* </Col>  
                  </Row>
                </Container> */}
                  </div>  
                  
                <div>
                
                    <p className="legend">Formations</p>
                    <ResumeItem title="Formation">
          {education.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Projets</p>
                </div>
            </Carousel>
    );
  }
  
  export default Carroussel;