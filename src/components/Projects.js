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
            <p>Below are some samples of my work:</p>
          </Col>
          <Col md ="1"></Col>
        </Row>


        <Row>
          <Col md ="1"></Col>
          <Col>
            <h3>Full-Stack Projects</h3>
            <hr />
            <Row>
              <Col sm="2">
              <b>T.V.O.D.</b>
              </Col>
              <Col>
                T.V.O.D. is a web platform for users to track what television programs they are watching during this era of "Peak TV." Users can mark what shows they consider their favorites, leave comments and ratings for each episode, and receive a schedule of all episodes upcoming and recently aired. They also have the ability to follow other users and receive updates on what their friends are currently watching.
                <br />
                <br />
                This app was built using React, Redux, Express, JavaScript, Node.js, Axios, HTML, CSS, Bootstrap, Moment, postgreSQL, and was deployed onto Heroku.

                <br />
                <br />
                <a href = "https://github.com/Brandoncyu/tvod-frontend" target="blank">Github</a> | <a href = "https://tvod.herokuapp.com" target="blank">Live Demo</a>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm="2">
              <b>Pump Up the Volunteers</b>
              </Col>
              <Col>
                Pump Up The Volunteers is a full-stack application that allows volunteers and non-profit organizations to connect through events. Organizations can post events, while volunteers can select interesting events to attend.
                <br />
                <br />
                This app was built using JavaScript, HTML, CSS, Bootstrap, Materialize, Browserify, Axios, Express, Morgan, Moment.js, Heroku and Surge.

                <br />
                <br />
                <a href = "https://github.com/Brandoncyu/pump-up-the-volunteers-frontend" target="blank">Github</a> | <a href = "http://pumpupthevolunteers.surge.sh/" target="blank">Live Demo</a>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm="2">
              <b>Task Manager</b>
              </Col>
              <Col>
                Task Manager is a fully-featured full-stack application allows users to create unique accounts, create multiple task lists, and add individual tasks to the aforementioned lists. Users also have the opportunity to mark tasks as "completed" and remove lists and tasks altogether. Each set of created lists are uniquely assigned and saved to the their account, and a username and password will be required to access the information.


                <br />
                <br />
                This app was built using JavaScript, HTML, CSS, Bootstrap, Axios, Browserify, Watchify, Live-Server and Moment

                <br />
                <br />
                <a href = "https://github.com/Brandoncyu/auth-task-manager-frontend" target="blank">Github</a> | <a href = "https://github.com/Brandoncyu/auth-task-manager-frontend/blob/master/taskmanagerwb.surge.sh" target="blank">Live Demo</a>
              </Col>
            </Row>
          </Col>
        <Col md ="1"></Col>
      </Row>
      <Row>
        <Col md ="1"></Col>
        <Col>
          <h3>Code Sample</h3>
          <hr />
          <Row>
            <Col sm="2">
            <b>TrackMeet</b>
            </Col>
            <Col>
              TrackMeet is a front-end application that allows you to keep track of information regarding the people you meet. This includes names, where you met them, how you met them, as well as interesting tidbits about each person.
              <br />
              <br />
              This app was build using JavaScript, HTML, CSS, Bootstrap, and Browserify.

              <br />
              <br />
              <a href = "https://github.com/Brandoncyu/track-meet" target="blank">Github</a> | <a href = "http://trackmeet.surge.sh" target="blank">Live Demo</a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="2">
            <b>Image Resizer</b>
            </Col>
            <Col>
              For one of my job applications, I was tasked with creating a web service to handle image resize requests. This back-end service was built in Node.
              <br />
              <br />
              <a href = {require('../Image-Resizer.pdf')} target="blank">Requirements</a> | <a href = "https://github.com/Brandoncyu/nbc-image-resizer-server" target="blank">Github</a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="2">
            <b>Galvanize Snacks API</b>
            </Col>
            <Col>
              During My independent study week, I successfully taught myself Python and Flask.py, a framework written in Python to build servers. I was able to recreate a server built in JavaScript and Express.js with the aforementioned language and framework.
              <br />
              <br />
              <a href = "https://github.com/Brandoncyu/galvanize-snacks-api-python" target="blank">Github</a>
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
