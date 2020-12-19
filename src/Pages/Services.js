import React from "react";
import { Button ,Container } from "react-bootstrap";
import "../App.css";

const Services = () => {
    return(
        <div id="services">
        <div className="services">
          <Container>
            <article id="main-col">
              <ul id="align-service">
                <li>
                  <h3>Static Website Design</h3>
                  <p>
                    I can create different Static website from sratch with HTML,
                    CSS ,JavaScript and also using templates.
                    <br />
                    See my sample{" "}
                    <a href="http://santheesh16.github.io/microsoft">
                      static
                    </a>{" "}
                    websites.
                  </p>
                </li>
                <li>
                  <h3>Dynamic Website Design</h3>
                  <p>
                    I can also create dynamic websites using
                    Mongodb,Expressjs,Reactjs,Nodejs(MERN).
                    <br />
                    Now, I am building a boilerplate of Admin and User login
                    websites. It is in{" "}
                    <a href="https://studentcollegeproject.herokuapp.com/">
                      progress
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <h3>Website Hosting</h3>
                  <p>
                    Website Hosting is major part to complete the website that
                    also I do using platform heroku and netclify.Learning to
                    deploy in AWS EC2.
                  </p>
                </li>
              </ul>
            </article>
            <aside id="sidebar">
              <div className="dark">
                <h3>Get A Quote</h3>
                <form id="quote">
                  <div className="form-group center-block">
                    <label for="inputName">Name</label>
                    <input
                      type="text"
                      className="form-control contact-input"
                      id="inputName"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="form-group center-block">
                    <label for="inputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control contact-input"
                      id="inputEmail"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div className="form-group center-block">
                    <label for="inputMessage">Message</label>
                    <textarea
                      id="inputMessage"
                      className="form-control contact-input"
                      rows="3"
                      placeholder="Your Message"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <Button 
                      className="button_1"
                      onclick="writeData()"
                      type="submit"
                      id="email-submit-btn"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </aside>
            
          </Container>
        </div>
      </div>
    )
}


export default Services;