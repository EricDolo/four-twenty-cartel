import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import { sidebarItems } from "../config/sidebarItems";
import { Link } from "react-router-dom";

export function ShopSidebar() {
  return (
    <Sidebar className="bg-gray-800 text-white"> {/* Darker but not black */}
      <SidebarContent>
        <SidebarGroup>
          <Link to={"/"}>
            <SidebarGroupLabel className="text-2xl font-bold px-4 py-3 text-center">
              Four Twenty Cartel
            </SidebarGroupLabel>
          </Link>
          <br />
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
