import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import "./Projects.css"
import "./ProjectCard/ProjectCard.css"
import Title from "../Title/Title"
import ProjectCard from "./ProjectCard/ProjectCard"
import image_1 from "./../../assets/image/projects/project-img1.jpg"
import image_2 from "./../../assets/image/projects/project-img2.jpg"
import image_3 from "./../../assets/image/projects/project-img3.jpg"
import image_4 from "./../../assets/image/projects/project-img4.jpg"
import image_5 from "./../../assets/image/projects/project-img5.jpg"
import image_6 from "./../../assets/image/projects/project-img6.jpg"
import image_7 from "./../../assets/image/projects/project-img7.jpg"
import image_8 from "./../../assets/image/projects/project-img8.png"
import image_9 from "./../../assets/image/projects/project-img9.jpg"
import image_10 from "./../../assets/image/projects/project-img10.png"




function Projects() {
    const ItemWeb = [ 
        {id : 1 , title : "HTML" , desc : "Lorem ipsum dolor sit amet"  , image : image_8 },
        {id : 2 , title : "VUE" , desc : "adipisicing elit.Ipsam ex " , image : image_10},
        {id : 3 , title : "NODE JS" , desc : "impedit mollitia nemo ad unde" , image : image_3},
        {id : 4 , title : "SASS" , desc : "adipisicing elit.Ipsam ex " , image : image_4},
        {id : 5 , title : "REACT" , desc : "Lorem ipsum dolor sit amet" , image : image_5},
        {id : 6 , title : "CSS" , desc : " impedit mollitia nemo ad unde" , image : image_6},

    ] 

    const ItemFront = [ 
        {id : 1 , title : "CSS" , desc : "impedit mollitia nemo ad unde" , image : image_7},
        {id : 2 , title : "HTML" , desc : " Lorem ipsum dolor sit amet" , image : image_8},
        {id : 3 , title : "SASS" , desc : "adipisicing elit.Ipsam ex " , image : image_9},
    ] 

    const ItemBack = [ 
        {id : 1 , title : "PHP" , desc : "adipisicing elit.Ipsam ex "  , image : image_1 },
        {id : 2 , title : "VUE" , desc : " Lorem ipsum dolor sit amet" , image : image_10},
        {id : 3 , title : "REACT" , desc : "impedit mollitia nemo ad unde" , image : image_7},
        {id : 4 , title : "NODE JS" , desc : " Lorem ipsum dolor sit amet" , image : image_4},
        {id : 5 , title : "JS" , desc : "adipisicing elit.Ipsam ex " , image : image_8},

    ] 


  return (
    <section className="projects" id="projects">
        <Container>
            <Row>
                <Col>
                    <div className="projects-content">
                        <Title name={"Project"} desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sint alias eaque tempore cum corrupti ."} />
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/first">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Web Developer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Front End</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Back End</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row style={{display : "flex" , flexWrap : "wrap"}}>
                                        {ItemWeb.map((item) => {
                                            return (
                                                <ProjectCard key={item.id} title={item.title} desc={item.desc} image={item.image}/>
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>  
                                <Tab.Pane eventKey="second">
                                    <Row style={{display : "flex" , flexWrap : "wrap"}}>
                                        {ItemFront.map((item) => {
                                            return (
                                                <ProjectCard key={item.id} title={item.title} desc={item.desc} image={item.image}/>
                                            )
                                            })}
                                    </Row>        
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                    {ItemBack.map((item) => {
                                        return (
                                            <ProjectCard key={item.id} title={item.title} desc={item.desc} image={item.image}/>
                                        )
                                        })}
                                    </Row>
                                </Tab.Pane>                          
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects
