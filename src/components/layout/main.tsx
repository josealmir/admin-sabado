import Form from "react-bootstrap/esm/Form";
import { Header } from "./header"
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";

export interface MainProps {
    children: React.ReactNode;
}

export const Main = () => {
    
    const[cep, setCep] = useState("");


    return (
        <div id="page-content-wrapper" className="main">
            <Header></Header>
            <div className="container-fluid">
                <h1 className="mt-4">Pesquise o seu cep aqui !</h1>
                <Row>
                    <Col sm={10}>
                        <Form.Control size="lg" type="text" 
                         placeholder="Informa o seu cep"
                         onChange={(e) => setCep(e.target.value)}
                         value={cep}  />
                    </Col>
                    <Col sm={2}>
                        <Button size="lg" variant="primary" 
                          onClick={() => alert(cep)} >Pesquisar</Button>
                    </Col>
                </Row>
            </div>
        </div>  
    );
}