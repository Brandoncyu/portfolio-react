import React, { Component }  from 'react';
import {
  Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

class Skills extends Component {
  render() {
    return (
      <div>
        <h3>Skills</h3>
        <div className="d-flex justify-content-start card-wrapper">
          {skillList.map((skill, index) => {
            return <Card className="skillCards">
              <CardImg src={skill.image} alt="Card image cap" />
            </Card>
          })}
        </div>
      </div>
    );
  }
}

export default Skills
