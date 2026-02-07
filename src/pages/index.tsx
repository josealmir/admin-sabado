import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import { Main } from "../layout/main"
import { Sidebar } from "../layout/sidebar"
import { useMemo, useState } from "react";
import { ViaCepApi } from "../app/apis/viacep.api";
import { SidebarItems } from "../layout/infra/sidebar.infra";
import { Body } from "../layout/body";
import type { ViaCepResponse } from "../app/apis/models/responses/viacep.response";


export const IndexPage = () => {

    const [pending, setPending] = useState(false);
    const [cep, setCep] = useState("");
    const [response, setResponse] = useState<ViaCepResponse | null>(null);
    const [ceps, setCeps] = useState<ViaCepResponse[]>([]);


    // Exemplo prático de uso do useMemo para filtrar ceps do estado de SP
    const cepsFiltrados = useMemo(() => {
        return ceps;
    }, [ceps]);


    const onSearchCep = () => {
        setPending(true);
        ViaCepApi.getAddressByCep(cep)
            .then((response) => {
                setCeps(prev => [...prev, response]);
                setResponse(response);
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
                    <Form action={onSearchCep}>
                        <Row>
                            <Col sm={10}>
                                <Form.Control size="lg" type="text"
                                    name="cep"
                                    placeholder="Informa o seu cep"
                                    onChange={(e) => setCep(e.target.value)}
                                    value={cep} />
                            </Col>
                            <Col sm={2}>
                                <Button
                                    type="submit"
                                    size="lg"
                                    variant="primary"
                                    disabled={pending}
                                > {pending ? <span> <Spinner animation="border" size="sm" /> Pesquisando </span> : "Pesquisar"}</Button>
                            </Col>

                            {
                                cepsFiltrados.map((address) => {
                                    return (<Row key={address.cep} className="mt-4">
                                        <Col><strong>CEP:</strong> {address.cep} </Col>
                                        <Col><strong>Logradouro:</strong> {address.logradouro} </Col>
                                        <Col><strong>Bairro:</strong> {address.bairro} </Col>
                                        <Col><strong>Cidade:</strong> {address.localidade} </Col>
                                        <Col><strong>Estado:</strong> {address.uf} </Col>
                                    </Row>)
                                })
                            }
                        </Row>
                    </Form>
                </Main>
            </Body>
        </>
    )
}