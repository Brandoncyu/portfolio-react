import React, { Component }  from 'react';
import {
  Row, Col
} from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <div>
        <a name="projects"></a>
        <Row>
          <Col md ="1"></Col>
          <Col>
            <h2>Projects</h2>
            <br />
          </Col>
          <Col md ="1"></Col>
        </Row>
        <Row>
          <Col md ="1"></Col>
          <Col>
            <h3>Full-Stack</h3>
            <hr />
            <Row>
              <Col xl="2">
                <img width="175" className="rounded-circle" src={require('../photos/tvod.jpg')} alt="profile" />
              </Col>
              <Col>
                <h4>T.V.O.D.</h4>
                T.V.O.D. is a web platform for users to track what television programs they are watching during this era of "Peak TV." Users can mark what shows they consider their favorites, leave comments and ratings for each episode, and receive a schedule of all episodes upcoming and recently aired. They also have the ability to follow other users and receive updates on what their friends are currently watching.
                <br />
                <br />
                This app was built using React, Redux, Express, JavaScript, Node.js, Axios, HTML, CSS, Bootstrap, Moment, postgreSQL, and was deployed onto Heroku.

                <br />
                <br />
                <a href = "https://github.com/Brandoncyu/tvod-frontend" target="blank"><i className="fab fa-github-square p-2"></i>Github</a> | <a href = "https://www.youtube.com/watch?v=JV3cFP_CQEo" target="blank"><i className="fab fa-youtube"></i> Seattle React.js Live Presentaton</a> | <a href = "https://tvod.herokuapp.com" target="blank"><i className="fas fa-link"></i> Live Demo</a> 
              </Col>
            </Row>
            <br />
            <Row>
              <Col xl="2">
                <img width="175" className="rounded-circle" src={require('../photos/volunteer.jpg')} alt="profile" />
              </Col>
              <Col>
                <h4>Pump Up The Volunteers</h4>
                Pump Up The Volunteers is a full-stack application that allows volunteers and non-profit organizations to connect through events. Organizations can post events, while volunteers can select interesting events to attend.
                <br />
                <br />
                This app was built using JavaScript, HTML, CSS, Bootstrap, Materialize, Browserify, Axios, Express, Morgan, Moment.js, Heroku and Surge.

                <br />
                <br />
                <a href = "https://github.com/Brandoncyu/pump-up-the-volunteers-frontend" target="blank"><i className="fab fa-github-square p-2"></i>Github</a> | <a href = "http://pumpupthevolunteers.surge.sh/" target="blank"><i className="fas fa-link"></i> Live Demo</a>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xl="2">
                <img width="175" className="rounded-circle" src={require('../photos/auth.jpeg')} alt="profile" />
              </Col>
              <Col>
                <h4>Task Manager</h4>
                Task Manager is a fully-featured full-stack application that allows users to create unique accounts, create multiple task lists, and add individual tasks to the aforementioned lists. Users also have the opportunity to mark tasks as "completed" and remove lists and tasks altogether. Each set of created lists are uniquely assigned and saved to the their account, and a username and password will be required to access the information.
                <br />
                <br />
                This app was built using JavaScript, HTML, CSS, Bootstrap, Axios, Browserify, Watchify, Live-Server and Moment
                <br />
                <br />
                <a href = "https://github.com/Brandoncyu/auth-task-manager-frontend" target="blank"><i className="fab fa-github-square p-2"></i>Github</a> | <a href = "http://taskmanagerwb.surge.sh" target="blank"><i className="fas fa-link"></i> Live Demo</a>
              </Col>
            </Row>
          </Col>
        <Col md ="1"></Col>
      </Row>
      <br />
      <Row>
        <Col md ="1"></Col>
        <Col>
          <h3>Other Projects</h3>
          <hr />
          <Row>
            <Col xl="2">
              <img width="175" className="rounded-circle" src={require('../photos/trackmeet.jpg')} alt="profile" />
            </Col>
            <Col>
              <h4>TrackMeet</h4>
              TrackMeet is a front-end application that allows you to keep track of information regarding the people you meet. This includes names, where you met them, how you met them, as well as interesting tidbits about each person.
              <br />
              <br />
              This app was build using JavaScript, HTML, CSS, Bootstrap, and Browserify.
              <br />
              <br />
              <a href = "https://github.com/Brandoncyu/track-meet" target="blank"><i className="fab fa-github-square p-2"></i>Github</a> | <a href = "http://trackmeet.surge.sh" target="blank"><i className="fas fa-link"></i> Live Demo</a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xl="2">
              <img width="175" className="rounded-circle" src={require('../photos/highlight.png')} alt="profile" />
            </Col>
            <Col>
              <h4>Highlight Priority</h4>
              For one of my job applications, I was tasked in creating a web service that will highlight phrases in a document given a string and an array of highlight objects. If highlights overlap, it will show the higher-priority highlights over the lower-priority highlights.
              <br />
              <br />
              This front-end app was built with React, React Color, Javascript, HTML, CSS and Node.
              <br />
              <br />
              <a href = "https://github.com/Brandoncyu/highlight-priority" target="blank"><i className="fab fa-github-square p-2"></i>Github</a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xl="2">
              <img width="175" className="rounded-circle" src={require('../photos/connect4.png')} alt="profile" />
            </Col>
            <Col>
              <h4>Conect Four</h4>
              I was tasked with building a Connect Four game, both in React and Vanilla JavaScript.
            <br />
              <br />
              The first app was built with React, Bootstrap, and JavaScript. The second was built with JavaScript, Bootstrap, jQuery, Browserify, Watchify, and Live-Server.
            <br />
              <br />
                <a href="https://github.com/Brandoncyu/connect4-react" target="blank"><i className="fab fa-github-square p-2"></i>Github for React App</a> | <a href="https://github.com/Brandoncyu/connect4-vanilla" target="blank"><i className="fab fa-github-square p-2"></i>Github for Vanilla JavaScript app App</a> 
            </Col>
          </Row>
          <br />
          <Row>
            <Col xl="2">
              <img width="175" className="rounded-circle" src={require('../photos/resize.png')} alt="profile" />
            </Col>
            <Col>
              <h4>Image Resizer</h4>
              For one of my job applications, I was tasked with creating a web service to handle image resize requests.
              <br />
              <br />
              This back-end service was built in Node.
              <br />
              <br />
              <a href = "https://github.com/Brandoncyu/image-resizer-server" target="blank"><i className="fab fa-github-square p-2"></i>Github</a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xl="2">
              <img width="175" className="rounded-circle" src={require('../photos/snacks.png')} alt="profile" />
            </Col>
            <Col>
              <h4>Galvanize Snacks API</h4>
              During my independent study week, I was tasked with recreating a server built in JavaScript and Express.js in Python and Flask.py. I was successfully able to teach myself the language and framework through the course of two weeks and rebuild the server.
              <br />
              <br />
              <a href = "https://github.com/Brandoncyu/galvanize-snacks-api-python" target="blank"><i className="fab fa-github-square p-2"></i>Github</a>
            </Col>
          </Row>
        </Col>
        <Col md ="1"></Col>
      </Row>
    </div>
    );
  }
}

export default Projects
