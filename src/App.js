import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import Footer from "./components/footer/footer.component";
import Profile from "./Pages/Profile";
import About from "./Pages/about/about.component";
import Experience from "./Pages/experience/experience.component";
import Skills from "./Pages/skills/skills.component";
// import LoadPage from "./components/loading/LoadingPage";
import ContactMedia from "./Pages/contact-form/contact-form.component";
import Project from "./Pages/projects-timeline/projects-timeline.component";
// import LoadPage from "./Pages/LoadingPage"
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function App() {

  return (
    <div id="home">
      <div className="home">
        <MyNavbar />

        <Fade duration={500}>
          <hr />
          <Profile />
        </Fade>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <About />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Skills />
          </Fade>
        </Container>

        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Project />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactMedia />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Footer />
          </Fade>
        </Container>
      </div>
    </div>
  );
}

export default App;
