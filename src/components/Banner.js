import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/removebg.png";
import headerImg2 from "../assets/img/ball3d.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import { EXPECTED_COLOR } from "jest-matcher-utils";

const AnimatedButton = ({ text, onClick }) => {
    return (
      <button className="animated-btn" onClick={onClick}>
        <span>{text}</span>
      </button>
    );
  };
  export default AnimatedButton;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Problem Solver" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Pushkar,`} <br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Problem Solver" ]'><span className="wrap">A {text}</span></span></h1>
                  <p>Results-driven Electronics Engineering student with a strong foundation in programming, web development, and problem-solving. Passionate about leveraging technology to create innovative solutions, with hands-on experience in projects like Text-to-Speech Converters and Weather Applications. Skilled in C, C++, Python, and modern web technologies such as React.js and JavaScript. Adept at collaborating in team environments and eager to contribute technical expertise to real-world challenges. Committed to continuous learning and professional growth in the field of software and electronics.</p>
                  
                  <button className="text-white rounded-pill fw-medium" 
                   onClick={() => window.open("https://drive.google.com/file/d/1xlnI3V2hrRYiOnI9JPoCmtPpG04jeCvI/view?usp=drivesdk")}>
      
                  <span className="resume-btn-text">RESUME</span>
                  </button>
                  

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div className="image-stack">
                        {/* <img src={headerImg2} alt="Header Img 2" className=""  /> */}
                        <img src={headerImg} alt="Header Img" className="img-front" />
                    </div>
                </div>
            }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
