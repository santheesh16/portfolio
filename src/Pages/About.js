import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <article id="main-col">
            <div className="pt-3 pb-5 align-items-center">
              <div>
                <div className="justify-content-center mb-2 mr-2 "></div>
              </div>
              <div>
                <div className="align-items-start p-2 my-details rounded">
                  <h1 className="page-title">About Me</h1>
                  Hi there! I am <strong>&nbsp;Santheesh A</strong>.
                  &nbsp;Now, I am studying B.E 3rd year department of Computer Science
                  Engineering in KPR Institute Of Engineering and Technology in
                  Coimbatore.
                  <br />
                  In the lockdown time, I learned how to build websites in
                  different types.After I decided to build a different static
                  and dynamic projects. Now, I am doing project in MERN(Mongodb,
                  Expressjs, Reactjs, Nodejs) Stack application for student lab
                  usage. And also learning lots of web development frameworks
                  and libraries.
                  <br />
                </div>
              </div>
            </div>
          </article>
          <aside id="sidebar">
            <div className="align-items-start p-2 my-details">
              <h3>What I Do</h3>
              <p>
                I do Static and Dynamic websites.In Static website, I can create
                user responsive website using HTML5 ,CSS and JavaScript.
                <br />
                In Dynamic website, I can create vibrate and suitable layout
                using Reactjs, Expressjs,Nodejs and Mongodb
              </p>
            </div>
          </aside>
        </Container>
      </div>
    </div>
  );
};

export default About;
