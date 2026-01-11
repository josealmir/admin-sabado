
export interface SideBarProps {
    itens: SidebarItem[];
    size: number;
};

export interface SidebarItem {
    label: string;
    href: string;
}

export const SidebarItems = [
    { label: "Dashboard", href: "#!" },
    { label: "Shortcuts", href: "#!" },
    { label: "Overview", href: "#!" },
    { label: "Events", href: "#!" },
    { label: "Profile", href: "#!" },
    { label: "Status", href: "#!" },
] as SidebarItem[];