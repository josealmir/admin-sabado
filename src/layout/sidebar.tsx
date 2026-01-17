import { Link } from "react-router-dom";
import type { SideBarProps } from "./infra/sidebar.infra"

export const Sidebar = (props : SideBarProps) => {
  const { itens } = props;
  
  return (
       <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                <nav>
                    {
                        itens?.map(item => (
                            <Link key={item.id} className="list-group-item list-group-item-action list-group-item-light p-3" to={item.to}>{item.label}</Link>
                        ))
                    }
                </nav>
            </div>
        </div>
  )
}