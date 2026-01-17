import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import { Main } from "../layout/main"
import { Sidebar } from "../layout/sidebar"
import { useState } from "react";
import { ViaCepApi } from "../app/apis/viacep.api";
import { SidebarItems } from "../layout/infra/sidebar.infra";
import { Body } from "../layout/body";

export const  IndexPage = () => {

    const [pending, setPending] = useState(false);
    const [cep, setCep] = useState("");

    const onSearchCep = () => {
     setPending(true);
     ViaCepApi.getAddressByCep(cep)
     .then((response) => {
        console.log(response);
     }).finally(() => {
        setPending(false);
     });
    
    }

    return (
        <>
            <Body>
                <Sidebar itens={SidebarItems} size={250} />
                <Main>
                    <h1 className="mt-4">Pesquise o seu cep aqui !</h1>
                    <Form  action={onSearchCep}>
                        <Row>
                            <Col sm={10}>
                                <Form.Control size="lg" type="text" 
                                name="cep"
                                placeholder="Informa o seu cep"
                                onChange={(e) => setCep(e.target.value)}
                                value={cep}  />
                            </Col>
                            <Col sm={2}>
                                <Button 
                                    type="submit"
                                    size="lg"
                                    variant="primary"
                                    disabled={pending}
                                > { pending ? <span> <Spinner animation="border" size="sm" /> Pesquiando </span>: "Pesquisar"}</Button>
                            </Col>
                            { }
                        </Row>
                    </Form>
                </Main>
            </Body>
        </>
    )
}