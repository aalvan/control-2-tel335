import {Button, Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import axios from "axios";

function AnswerAPI(props){
    const [loaded, setDataLoaded] = useState(false)
    useEffect(()=>{
        const  fetchData = async () => {
            if (!loaded) {
                let test1 = "Francisco"
                const result = await axios.get(`https://api.chucknorris.io/jokes/search?query=${test1}`)
                if (result.data) {
                    setDataLoaded(true)
                }
            }
        }
        fetchData()
    })
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label id={"answdvsfer-query"}></Form.Label>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default AnswerAPI
