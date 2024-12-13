import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuItem } from '../ui/sidebar';
import { Link } from 'react-router-dom';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaPhp, FaSwift } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { MdReadMore } from "react-icons/md";
import { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react';


function LanguagesNav() {
    const [isLanguageActive, setIsLanguageActive] = useState("JavaScript");

    const languages = [
        {
            name: "JavaScript",
            slug: "/languages/javascript",
            icon: <FaJsSquare size={20} />,
            total: 5
        },
        {
            name: "Python",
            slug: "/languages/python",
            icon: <FaPython size={20} />,
            total: 12
        },
        {
            name: "HTML",
            slug: "/languages/html",
            icon: <FaHtml5 size={20} />,
            total: 58
        },
        {
            name: "CSS",
            slug: "/languages/css",
            icon: <FaCss3Alt size={20} />,
            total: 86
        },
        {
            name: "Java",
            slug: "/languages/java",
            icon: <FaJava size={20} />,
            total: 35
        },
        {
            name: "PHP",
            slug: "/languages/php",
            icon: <FaPhp size={20} />,
            total: 5
        },
        {
            name: "Swift",
            slug: "/languages/swift",
            icon: <FaSwift size={20} />,
            total: 95
        },
        {
            name: "Ruby",
            slug: "/languages/ruby",
            icon: <DiRuby size={20} />,
            total: 15
        },
        {
            name: "Others",
            slug: "/languages/others",
            icon: <MdReadMore size={20} />,
            total: 0
        }
    ];

    return (


        <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
                <SidebarGroupLabel asChild className="text-lg my-1">
                    <CollapsibleTrigger>
                        Languages
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    {/* menu  */}
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-3">
                            {languages.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <Link
                                        to={item.slug}
                                        aria-label={`Go to ${item.name}`}
                                        onClick={() => setIsLanguageActive(item.name)}
                                        className={`flex items-center w-full gap-2 rounded-md px-2 py-1 text-lg font-normal text-sidebar-foreground cursor-pointer ${isLanguageActive === item.name
                                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                            }`}
                                    >
                                        <SidebarMenuBadge className={`${isLanguageActive === item.name ? "text-sidebar-primary-foreground" : " text-sidebar-primary"}`}>
                                            {item?.total > 0 ?
                                                item?.total < 20 ?
                                                    item?.total > 9 ?
                                                        item?.total : `0${item?.total}` : "20+"
                                                : ""}
                                        </SidebarMenuBadge>
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>


    );
}

export default LanguagesNav;

