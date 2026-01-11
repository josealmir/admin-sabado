"use client"
import { Main } from '@/components/layout/main';
import { Body } from '@/components/layout/body';
import { Sidebar } from '@/components/layout/sidebar';
import { SidebarItems} from "../components/infra/sidebar-setting";
export default function Home() {

  return (
    <>
      <Body>        
        <Sidebar itens={SidebarItems} 
                 size={SidebarItems.length}></Sidebar>
        <Main />
      </Body>

    </>
  );
}
