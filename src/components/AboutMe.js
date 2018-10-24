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
        <Col md="1"></Col>
        <Col md="3" className="d-flex align-items-center">
          <img width="300" className="rounded-circle" src={require('../photos/profile.jpg')} alt="profile" />
        </Col>
        <Col md="7">
          <h1>Welcome to Brandon Yu's Portfolio Site! </h1>
          <br />
          <p>Hello! My name is Brandon Yu and I am a software developer based in Seattle, Washington. I recently completed Galvanize's Web Development Immersive program, and I look forward to applying my new skill set and exploring the possibilities that it will bring!</p>
          <p>If you're interested in employing an enthusiastic developer passionate about his work, or even providing general suggestions, let's get in touch.</p>
          <a href = {require('../Resume.pdf')} target="blank"><i className="fas fa-file p-2"></i>My CV</a>
          <br />
          <a href = "mailto:brandoncyu@gmail.com" target="blank"><i className="fas fa-envelope p-2"></i>Email</a>
          <br />
          <a href = "https://www.linkedin.com/in/brandoncyu/" target="blank"><i className="fab fa-linkedin p-2"></i>LinkedIn</a>
          <br />
          <a href = "https://github.com/brandoncyu" target="blank"><i className="fab fa-github-square p-2"></i>GitHub</a>
        </Col>
        <Col md="1"></Col>
      </Row>
      </Jumbotron>
    );
  }
}

export default AboutMe
