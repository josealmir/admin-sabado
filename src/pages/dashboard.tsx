import { Body } from "../layout/body";
import { SidebarItems } from "../layout/infra/sidebar.infra";
import { Main } from "../layout/main";
import { Sidebar } from "../layout/sidebar";


export const DashboardPage = () => {

    return (
        <>
            <Body>
                <Sidebar itens={SidebarItems} size={250} />
                <Main>

                </Main>
            </Body>
        </>
    );
}