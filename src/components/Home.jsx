import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap"
import pastasciutte from '../data/menu.json'

const Home = function (){
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                <h2>Le migliori pastasciutte del web!</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                <Carousel>
                    {pastasciutte.map((pasta) => {
                            return(
                                <Carousel.Item key={pasta.id}>
                                <img
                    src={pasta.image}
                    className="w-100"
                    alt={'immagine di ' + pasta.name}
                  />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                         )
                        })}
                    </Carousel>
                    </Col>
                    </Row>
                    <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6} className="text-center">
                    <ListGroup>
                        {
                            pastasciutte[0].comments.map((recensione)=>{
                                return (
                                <ListGroup.Item key={recensione.id}>{recensione.comment}- {recensione.rating}/5</ListGroup.Item>
                            )
                            })
                        }
                       
                    </ListGroup>
                </Col>
                </Row>
        </Container>
    )
}
export default Home