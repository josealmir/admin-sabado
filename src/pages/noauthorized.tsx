import { Body } from "../layout/body"
import { SidebarItems } from "../layout/infra/sidebar.infra"
import { Main } from "../layout/main"
import { Sidebar } from "../layout/sidebar"


export const NoAuthorizedPage = () => {
    return (
        <>
            <Body>
                <Sidebar itens={SidebarItems} size={250} />
                <Main>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#ffc107" className="mb-4" viewBox="0 0 16 16" style={{ display: 'block' }}>
                            <g>
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 13.233c-.457.778.091 1.767.982 1.767h13.707c.89 0 1.438-.99.982-1.767L8.982 1.566z"/>
                                <rect x="7.5" y="5" width="1" height="5" rx="0.5" fill="#fff" />
                                <circle cx="8" cy="12" r="1" fill="#fff" />
                            </g>
                        </svg>
                        <h1 className="display-4 fw-bold text-warning">Acesso não autorizado - 403</h1>
                        <p className="lead mb-4 text-secondary">Você não tem permissão para acessar esta página.</p>
                        <a href="/" className="btn btn-primary px-4 py-2">Voltar para o início</a>
                    </div>
                </Main>
            </Body>
        </>
    );
}
