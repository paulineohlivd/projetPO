import React from "react";
import Thumbnail from './Thumbnail.js';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'react-bootstrap';
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
    startDate: new Date("2020-01-08"),
    endDate: new Date("ongoing"),
    title: "Waitress",
    children: (
      <>
        <p>Hai Restaurant</p>
        <p>Malmö, Sweden</p>
      </>
    )
  },
  {
    startDate: new Date("2012-09-30"),
    endDate: new Date("2013-05-30"),
    title: "Nutrition Advisor",
    children: (
      <>
        <p>Abbott Laboratories</p>
        <p>Manila, Philippines</p>
      </>
    )
  },
  {
    startDate: new Date("2009-11-30"),
    endDate: new Date("2012-08-30"),
    title: "Real Estate Agent",
    children: (
      <>
        <p>SM Development Corp.</p>
        <p>Manila, Philippines</p>
      </>
    )
  }
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

function Curriculum(props)  {
  return (
    <div className="resume">
      <div className="resume-left">
        <div className="resume-profile">
          <div className="resume-profile-img">
            {/* Image à ajouter */}
            {/* <img
              src="https://i.pinimg.com/originals/15/d2/75/15d275683940f589ed37dc3a169b9fc3.gif"
              alt="avatar"
            /> */}
          </div>
          <div className="resume-profile-info">
            <h1 className="name">Pauline Olliveaud</h1>
            <h2 className="career">Développeur FullStack</h2>
          </div>
          <div className="resume-about">
            <h3>A propos de moi</h3>
            <p>
              La chimiste au devant du digital !
              Je suis actuellement en reconversion pour devenir développeur FullStack !
            </p>
          </div>
          <div className="resume-contact">
            <h3>Contact</h3>
            <div className="resume-contact-info">
              {contactList.map(item => (
                <ContactLink key={item.link} {...item} />
              ))}
            </div>
          </div>
          {/* <div className="resume-follow">
            <h3>Follow Me</h3>
            <div className="resume-follow-icons">
              {followList.map(item => (
                <FollowIcon key={item.id} {...item} />
              ))}
            </div>
          </div> */}
        </div>
        <div className="competences">
          <h3> Compétences en cours d'acquisition </h3>
          {/* <SkillBar title="HTML5" value={4} />
          <SkillBar title="CSS3" value={4} />
          <SkillBar title="Javascript" value={3} />
          <SkillBar title="ReactJs" value={3} /> */}
          <p>Langages : HTML, CSS, Javascript, PHP 7, PL/SQL, Java<br></br>
          Environnement : Eclipse, PHPStorm, Android Studio<br></br>
          Plateforme / FrameWork : Symfony 3 (Wamp), Boostrap, JQuery, Java SE et EE <br></br>
          CMS : Wordpress<br></br>
          ORM : Doctrine<br></br>
          Méthodes : Modélisation de données (Oracle CDM) et Méthode de développement Agile (Scrum), UML(Unified Modeling Language)<br></br>
          Base de données : SQLServer, Oracle, MySQL</p>
        </div>

        
      </div>
      <div className="resume-right">
       
        <ResumeItem title="Expériences">
          {experience.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
      

        <ResumeItem title="Formation">
          {education.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>

        <InterestItem title="Interêts">
          {interests.map(item => (
            <Interest {...item} />
          ))}
        </InterestItem>
      </div>
    </div>
  );
}

export default Curriculum;