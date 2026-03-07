
import { Main } from "../layout/main"
import { Body } from "../layout/body";
import { useMemo, useState } from "react";
import { Sidebar } from "../layout/sidebar"
import type { ErroApi } from "../app/apis/models/erro.api";
import { SidebarItems } from "../layout/infra/sidebar.infra";
import { ModalConfirm } from "../app/components/modal-confirm";
import { NotredameCepApi } from "../app/apis/notredame-cep.api";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import type { Cep } from "../app/apis/models/responses/cep.response";
import type { CepCreate } from "../app/apis/models/requests/cep.request";
import { ToastMessage, type ToastProps } from "../app/components/toast-message";


export const IndexPage = () => {

    const [cep, setCep] = useState("");
    const [pending, setPending] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [ceps, setCeps] = useState<Cep[]>([]);
    const [toast, setToast] = useState<ToastProps | null>(null);
    const [response, setResponse] = useState<Cep | null>(null);
    const [cepCreate, setCepCreate] = useState<CepCreate | null>(null);


    // Exemplo prático de uso do useMemo para filtrar ceps do estado de SP
    const cepsFiltrados = useMemo(() => {
        return ceps;
    }, [ceps]);


    const onSearchCep = () => {
        setPending(true);
        if (cep.length === 0) {
            NotredameCepApi.getPage()
                .then((response) => {
                    setCeps(response.data);
                })
                .catch((error: ErroApi) => {
                    setToast({ message: `${error.status} :${error.detail}`, type: 'Danger' });
                })
                .finally(() => {
                    setPending(false);
                });

        } else {
            NotredameCepApi.getCep(cep)
                .then((response) => {
                    setCeps(prev => [...prev, response]);
                })
                .catch((error: ErroApi) => {
                    setToast({ message: `${error.status} :${error.detail}`, type: 'Danger' });
                })
                .finally(() => {
                    setPending(false);
                });
        }
    }

    const openModal = (zipCode: string) => {
        setCepCreate({ zipCode: zipCode } as CepCreate);
        setShowModal(true);
    }

    const onConfirm = () => {
        setLoading(true);
        NotredameCepApi.postCep(cepCreate ?? {} as CepCreate)
            .then((response) => {
                setResponse(response);
                onCancel();
                setToast({ message: "Cep salvo com sucesso", type: 'Success' });
            }).catch((error: ErroApi) => {
                setToast({ message: `${error.status} :${error.detail}`, type: 'Danger' });
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const onCancel = () => {
        setCepCreate(null);
        setShowModal(false);
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
                        </Row>
                    </Form>
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
                                        <th scope="col">Ação</th>
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
                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalConfirm"
                                                            onClick={() => openModal(address.zipCode)}>Cadastrar</button>
                                                    </td>
                                                </tr>
                                            )
                                        }) :
                                            <tr>
                                                <td colSpan={6} className="text-center">Nenhum CEP encontrado</td>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <ToastMessage message={toast?.message} type={toast?.type} />
                    <ModalConfirm loading={loading} show={showModal} onConfirm={onConfirm} onCancel={onCancel} />
                </Main>
            </Body>
        </>
    )
}