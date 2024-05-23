import { text } from "@fortawesome/fontawesome-svg-core";
import { Card, Col } from "react-bootstrap"

function ProjectCard({title , desc , image}) {
  return (
    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title >{title}</Card.Title>
                <Card.Text >
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProjectCard
