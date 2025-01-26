import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Timeline from "./Timeline";
import { TbTimeline } from "react-icons/tb";
import Education from "./Education";
import '../../style.css'

function AboutCard() {
  return (
    <>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              I am Sruthi, from Palakkad, Kerala. I am a fresher. I have
              completed MCA in the year 2024 from center for computer science and information technology
            </p>
            {/* <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul> */}

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>

            <footer className="blockquote-footer">Sruthi A S</footer>
          </blockquote>
        </Card.Body>
      </Card>
      <br /><br /><br /><br /><br /><br /><br /><br />

      <Timeline/>
      <h4 style={{textAlign:"center",fontSize:"44px",color:"violet",marginTop:"110px"}}>EDUCATION</h4>
      <Education/>
      
      </>
  );
}

export default AboutCard;
