import {Button, Col, Container} from "react-bootstrap";
import {Row} from "react-bootstrap";

function MoviesList (props) {
    return(
        <section id="moviesList">
            <Container>
                <Row>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.movies.map((movie, index) => {
                                    return(
                                    <div key={index} className='row'>
                                        <Row>
                                            <Col>
                                                <label>Título:</label>
                                                <h2>{movie.Title}</h2>
                                            </Col>
                                            <Col>
                                                <Button variant={"primary"} size={"sm"}>Agregar</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    )})
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default MoviesList