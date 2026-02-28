import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import { Main } from "../layout/main"
import { Sidebar } from "../layout/sidebar"
import { useMemo, useState } from "react";
import { SidebarItems } from "../layout/infra/sidebar.infra";
import { Body } from "../layout/body";
import { NotredameCepApi } from "../app/apis/notredame-cep.api";
import type { Cep } from "../app/apis/models/responses/cep.response";
import type { ErroApi } from "../app/apis/models/erro.api";


export const IndexPage = () => {

    const [pending, setPending] = useState(false);
    const [cep, setCep] = useState("");
    const [response, setResponse] = useState<Cep | null>(null);
    const [ceps, setCeps] = useState<Cep[]>([]);

    // Exemplo prático de uso do useMemo para filtrar ceps do estado de SP
    const cepsFiltrados = useMemo(() => {
        return ceps;
    }, [ceps]);


    const onSearchCep = () => {
        setPending(true);
        NotredameCepApi.getCep(cep)
            .then((response) => {
                setCeps(prev => [...prev, response]);
            }).catch((error: ErroApi) => {
                console.log(error);
            })
            .finally(() => {
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
                            <Row className="mt-4">
                                <Col>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Cep</th>
                                                <th scope="col">Provider</th>
                                                <th scope="col">Bairro</th>
                                                <th scope="col">Cidade</th>
                                                <th scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { 
                                                cepsFiltrados.length > 0 ? cepsFiltrados.map((address) => {
                                                    return (
                                                        <tr key={address.zipCode}>
                                                            <th scope="row">{address.zipCode}</th>
                                                            <td>{address.provider}</td>
                                                            <td>{address.district}</td>
                                                            <td>{address.city}</td>
                                                            <td>{address.state}</td>
                                                        </tr>
                                                    )
                                                }) :
                                                <tr>
                                                    <td colSpan={5} className="text-center">Nenhum CEP encontrado</td>
                                                </tr> 
                                            }


                                        </tbody>
                                    </table>
                                </Col>
                            </Row>

                        </Row>
                    </Form>
                </Main>
            </Body>
        </>
    )
}