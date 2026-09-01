import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Computer Science and Engineering student at{" "}
              <b className="purple">LJ University</b>, currently entering{" "}
              <b className="purple">Semester 5</b>, with an expected
              graduation in <b className="purple">2028</b>. I’m an aspiring{" "}
              <b className="purple">Full Stack Developer</b> who enjoys
              building practical web applications and learning modern
              technologies.
              <br />
              <br />
              I’m familiar with
              <i>
                <b className="purple"> Java, Python, and JavaScript</b>
              </i>
              , along with core Computer Science fundamentals like{" "}
              <b className="purple">Data Structures</b> and{" "}
              <b className="purple">DBMS</b>.
              <br />
              <br />
              On the web development side, I work with
              <i>
                <b className="purple"> HTML, CSS, JavaScript, and ReactJS </b>
              </i>
              for the frontend, and{" "}
              <i>
                <b className="purple">Django and Django REST Framework</b>
              </i>{" "}
              for the backend, along with databases like{" "}
              <b className="purple">MySQL</b> and{" "}
              <b className="purple">MongoDB</b>.
              <br />
              <br />
              I’m currently looking for{" "}
              <b className="purple">
                software / web development internship
              </b>{" "}
              opportunities to keep building and learning.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
