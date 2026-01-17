
import { Footer } from "./footer"
import { Header } from "./header"
import type { MainProps } from "./infra/main.infra"
    
export const Main = (props : MainProps) => {

    return (
        <div id="page-content-wrapper" className="main">
            <Header/>
            <div className="container-fluid">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}