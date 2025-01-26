import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import python from '../../Assets/python.jpg'
import git from '../../Assets/git.png'
import react from '../../Assets/react.png'
import { Container } from 'react-bootstrap';


function Timeline() {
  return (
    <Container style={{marginTop:"90px"}}>
      <h4 style={{textAlign:"center",fontSize:"44px",color:"violet",marginTop:"110px"}}>CERTIFICATIONS</h4>
      <Carousel >
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={python}
          alt="Third slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>PYTHON</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={git}
          alt="Third slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>GIT</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={react}
          alt="Second slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>React</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={python}
          alt="Third slide"
        />
          <br />
          <br />
          <br />  
          <br />
          <br />
        <Carousel.Caption>
        <h3 style={{fontWeight:"bolder"}}>Django</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Container>
    );
}

export default Timeline



