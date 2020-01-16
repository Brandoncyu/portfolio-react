import React, { Component }  from 'react';
import {
  Row, Col
} from 'reactstrap';

class Skills extends Component {
  render() {
    return (
      <Row>
        <a name="skills"></a>
        <Col md ="1"></Col>
        <Col>
          <h2>Skills</h2>
          <p>Throughout my time at the Web Development Immersive program, I learned the languages, frameworks, and computer science fundamentals essential to a career in web development.</p>
          <p>Skills gained include:</p>
          <Row>
          <Col>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>HTML5</li>
              <li>Test-Driven Development </li>
              <li>Python</li>
              <li>REST-ful APIs</li>
              <li>Git</li>
              <li>Heroku</li>
              <li>Amazon Web Services</li>
              <li>C++</li>
              <li>C#</li>
              <li>Visual Studios</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Knex.js</li>
              <li>Object-Oriented Programming</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>Flask.py</li>
              <li>AJAX</li>
              <li>GitHub</li>
              <li>BitBucket</li>
              <li>Cloudinary</li>
              <li>Azure DevOps</li>
              <li>WinDbg</li>
              <li>Unit Testing</li>    
            </ul>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
          </Row>
        </Col>
        <Col md ="1"></Col>
      </Row>
    );
  }
}

export default Skills
