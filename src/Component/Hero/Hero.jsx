import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Col, Container, Row } from "react-bootstrap";
import heroImg from "./../../assets/image/hero/hero-img.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function Hero() {

    const work = ['Web Developer' , 'Front End Developer' , 'Back End Developer'];

    // STATE

    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const [text , setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random() *100)

    // == STATE ==

    const period = 2000;

    // USE EFFECT

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta
    )
    return () => {clearInterval(ticker)}

},[text])

    // == USE EFFECT ==

    // FUNCTION

    let tick = () =>{
        let i = loopNum % work.length;
        let fullText = work[i];
        let updateText = isDeleting ? fullText.substring(0 , text.length -1) : fullText.substring(0 , text.length +1);

        setText(updateText);

        if (isDeleting) {
            setDelta((prev) => prev / 2 )
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

    // == FUNCTION ==



  return (
    <div>
      <section className="hero" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} lg={7}>
              <div className="hero-content">
                <h2 className="tagline">Welcome to my portfolio</h2>
                <h1>
                 {` Hi i‘m Yehea`} <span>{text}</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellat saepe in animi aliquid? Fugiat labore quaerat quasi
                  architecto, id corrupti numquam tempore consequatur explicabo
                  fugit .
                </p>
                <button className="btn" onClick={() =>{console.log("Connected")}}>
                    <span>
                        Let’s Connect
                        <FontAwesomeIcon icon={faArrowAltCircleRight} size="1x"/>
                    </span>
                </button>
              </div>
            </Col>
            <Col xs={12} md={6} lg={5}>
                <div className="hero-img">
                    <img src={heroImg} alt="heroImg" />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Hero;
