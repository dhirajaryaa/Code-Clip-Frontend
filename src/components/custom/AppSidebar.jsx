// import * as React from "react"
import { Code2Icon, Grid2X2, Heart, Trash } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logo } from "."
import { Link } from "react-router-dom";
import { useState } from "react";

const AppSidebar = (props) => {
    const [isLinkActive, setIsLinkActive] = useState("All Snippets");

    const NavLinks = [
        {
            name: "All Snippets",
            url: "#",
            icon: <Grid2X2 size={20} />
        },
        {
            name: "My Snippets",
            url: "#",
            icon: <Code2Icon size={20} />
        },

        {
            name: "Favorites",
            url: "#",
            icon: <Heart size={20} />
        },
        {
            name: "Trash",
            url: "#",
            icon: <Trash size={20} />
        },

    ]

    return (
        <Sidebar variant="floating" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild >
                            {/* logo  */}
                            <Logo Ref="/dashboard" className={"ml-2"} />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="mt-10 px-8">
                {/* nav links  */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-lg my-4">Quick Links</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-3">
                            {NavLinks.map((item) => (
                                <nav key={item.name} >
                                    <Link
                                        to={item.url}
                                        onClick={() => setIsLinkActive(item.name)}
                                        className={`flex items-center gap-2 rounded-md p-2 text-lg font-normal text-sidebar-foreground  cursor-pointer  ${isLinkActive === item.name ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"} `}>
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </nav>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar