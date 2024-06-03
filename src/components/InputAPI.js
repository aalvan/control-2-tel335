import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";

function InputAPI() {

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Label>Búsqueda</Form.Label>
                        <Form.Control as="textarea" rows={1} id={"query"}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant={"primary"} size={"sm"} onClick={()=>{alert(document.getElementById("query").value)}}>Ejecutar</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default InputAPI