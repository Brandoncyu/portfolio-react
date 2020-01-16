import React, { Component }  from 'react';
import {
  Jumbotron, Row, Col
} from 'reactstrap';

class AboutMe extends Component {
  render() {
    return (
      <Jumbotron>
      <a name="about"></a>
      <Row>
        <Col xl="1"></Col>
        <Col xl="3" className="d-flex align-items-center">
          <img width="300" className="rounded-circle" src={require('../photos/profile.jpg')} alt="profile" />
        </Col>
        <Col xl="7">
          <h1>Welcome to Brandon Yu's Portfolio Site! </h1>
          <br />
          <p>Hello! My name is Brandon Yu and I am a software developer based in San Francisco, California. My primary experience involves web development, back-end engineering, and unit testing. I am proven to be a strong leader, a caring coworker, and overall a total team player. Highly motivated to continue my career particularly in the field where my passions lie.</p>
          <a href = {require('../Resume.pdf')} target="blank"><i className="fas fa-file p-2"></i>My CV</a>
          <br />
          <a href = "mailto:brandoncyu@gmail.com" target="blank"><i className="fas fa-envelope p-2"></i>Email</a>
          <br />
          <a href = "https://www.linkedin.com/in/brandoncyu/" target="blank"><i className="fab fa-linkedin p-2"></i>LinkedIn</a>
          <br />
          <a href = "https://github.com/brandoncyu" target="blank"><i className="fab fa-github-square p-2"></i>GitHub</a>
        </Col>
        <Col xl="1"></Col>
      </Row>
      </Jumbotron>
    );
  }
}

export default AboutMe
