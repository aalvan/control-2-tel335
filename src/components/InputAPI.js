import Form from 'react-bootstrap/Form';
import {Button, Col, FormLabel, Row} from "react-bootstrap";
import {Fragment, useEffect, useState} from "react";
import axios from "axios";
//import { createStore } from 'redux'
import factsReducer from "../reducer/reducer";

// const store = createStore(factsReducer)
function InputAPI() {
    const [loaded, setDataLoaded] = useState(false)
    const [queryData, setQueryData] = useState({})
    const [queryText, setQuery] = useState('')

    //const addFact = (fact) => {
    //    store.dispatch({type: 'ADD', fact})

    //}
    const  fetchData = async () => {
        try{

            const result = await axios.get(`https://api.chucknorris.io/jokes/search?query=${queryText}`)
            if (result.data) {
                setDataLoaded(true)
                setQueryData(result.data)
            }

        }catch (error) {
            if (error.response && error.response.status === 400) {
                setQueryData([])
                alert("No puede estar vacío el campo de texto")
            }
        }

    }
    //store.subscribe(() => {
    //    console.log(store.getState())
    // })
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3">

                        <Form.Label>Búsqueda</Form.Label>
                        <Form.Control as="textarea" rows={1} id={"query"}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant={"primary"} size={"sm"} onClick={()=>{
                        setQuery(document.getElementById('query').value )
                        fetchData()
                    }}>Ejecutar</Button>
                </Col>
            </Row>
            <Row>
                <Form.Group className="mb-3">
                    <Form.Label id={"answer-query"}></Form.Label>
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {Object.keys(queryData).length > 0 ? queryData.result.map((fact, index) => {
                                return (
                                    <div key={index} className='row'>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Fact:</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{fact.value}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Button variant={"primary"} size={"sm"} onClick={() => {
                                                    // addFact(fact.value)
                                                }}>Like</Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Fecha de creación:</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{fact.created_at}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Categorías:</Form.Label>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{fact.categories && fact.categories.length > 0
                                                        ? fact.categories
                                                        : 'No tiene categorias'}</Form.Label>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            }): ''
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
        </Form>
    );
}

export default InputAPI