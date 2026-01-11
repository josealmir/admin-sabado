import { SideBarProps } from "../infra/sidebar-setting"

export const Sidebar = ( props : SideBarProps) => {

    const { itens } = props
    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                {
                    itens?.map(item => (
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href={item.href}>{item.label}</a>
                    ))
                }
            </div>
        </div>
    )
}