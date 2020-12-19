import React from "react";
import { Row, Col, Card, CardDeck, Container } from "react-bootstrap";
import "../App.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <div className="skills">
        <Container>
        <CardDeck>
          <Row className="d-flex justify-content-around">
            {/* Frontend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  {/* Frontend */}
                  <Card.Title className="text-center  card-title">
                    Frontend
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    HTML <br/>
                    CSS  <br/>
                    JavaScript <br/>
                    ReactJs <br/>
                    React Bootstrap
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Backend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Backend
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    NodeJs <br/>
                    ExpressJs <br/>
                    Java JDBC 
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Hosting Platforms */}
              <Card className="focus mt-2 mb-2 ">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Hosting Platforms
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    Netclify <br/>
                    GitHub Pages <br/>
                    Heroku <br/>
                    AWS ES2
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Programming Languages */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Programming Languages
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    JavaScript <br/>
                    Java Advance <br/>
                    Python (Basics)
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Database */}

              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Database
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    MySQL <br/>
                    MongoDB 
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* Version Control */}

              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Version Control
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <span className="p-2"></span>
                    Git <br/>
                    Bitbucket
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
