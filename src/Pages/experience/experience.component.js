import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                className=" justify-content-center dark"
              >
                <h1 className="text-center">EXPERIENCE</h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> ReactJs, NodeJs, ExpressJs,
                    My-SQL
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <h3>Static Website Design</h3>
                        <p>
                          Create different Static website from sratch with
                          HTML, CSS ,JavaScript and also using templates.
                          <br />
                          
                        </p>
                      </li>
                      <li>
                        <h3>Dynamic Website Design</h3>
                        <p>
                          Create dynamic websites using
                          Mongodb, Expressjs, Reactjs, Nodejs (MERN Stack).
                          <br />
                          Now, I am building a boilerplate of Admin and User
                          login websites.
                        </p>
                      </li>
                      <li>
                        <h3>Website Hosting</h3>
                        <p>
                          Website Hosting is major part to complete the website
                          that also I do using platform heroku and netclify.
                          Learning to deploy in AWS EC2.
                        </p>
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
