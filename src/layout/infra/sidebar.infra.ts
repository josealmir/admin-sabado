
export interface SideBarProps {
    itens: SidebarItem[];
    size: number;
};

export interface SidebarItem {
    id: string;
    label: string;
    to: string;
}

export const SidebarItems = [
    { id: "dashboard", label: "Dashboard", to: "/dashboard" },
    { id: "index", label: "Via Cep", to: "/index" },
    { id: "shortcuts", label: "Shortcuts", to: "/nao" },
    { id: "events", label: "Events", to: "/#!" },
    { id: "profile", label: "Profile", to: "/#!" },
    { id: "status", label: "Status", to: "/#!" },
    { id: "notfound", label: "Status", to: "/#!" },
] as SidebarItem[];

