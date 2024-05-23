import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import meter_1 from "./../../assets/image/skills/meter1.svg"
import meter_2 from "./../../assets/image/skills/meter2.svg"
import meter_3 from "./../../assets/image/skills/meter3.svg"
import { useState } from "react";
import Title from "../Title/Title";


function Skills() {
  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const [items , setItem] = useState([
  {id : 1 , job : "Web Developer" , image : meter_1},
  {id : 2 , job : "Front End Developer" , image : meter_2},
  {id : 3 , job : "Back End Developer" , image : meter_3},
  {id : 4 , job : "Web Desinger" , image : meter_2},

])

const listItems  = items.map((item) =>{
  return (
    <div className="item" key={item.id}>
      <h5>{item.job}</h5>
      <img src={item.image} alt="image"/>
    </div>
  )
})

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
              <div className="skills-content">
                <Title name={"Skills"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sin alias eaque tempore cum corrupti, commodi, ipsum recusandaesimilique quos distinctio ."}/>
                <Carousel responsive={responsive} infinite={true} showDots={true} autoPlay={true}  autoPlaySpeed={3000} className="skills-slider">
                    {listItems}
                </Carousel>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
