import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from '../ui/sidebar';
import { Link } from 'react-router-dom';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaPhp, FaSwift } from "react-icons/fa";
import { DiRuby, DiGo } from "react-icons/di";
import { useState } from 'react';

function LanguagesNav() {
    const [isLanguageActive, setIsLanguageActive] = useState("");

    const languages = [
        {
            name: "JavaScript",
            slug: "/languages/javascript",
            icon: <FaJsSquare size={20} />
        },
        {
            name: "Python",
            slug: "/languages/python",
            icon: <FaPython size={20} />
        },
        {
            name: "HTML",
            slug: "/languages/html",
            icon: <FaHtml5 size={20} />
        },
        {
            name: "CSS",
            slug: "/languages/css",
            icon: <FaCss3Alt size={20} />
        },
        {
            name: "Java",
            slug: "/languages/java",
            icon: <FaJava size={20} />
        },
        {
            name: "PHP",
            slug: "/languages/php",
            icon: <FaPhp size={20} />
        },
        {
            name: "Swift",
            slug: "/languages/swift",
            icon: <FaSwift size={20} />
        },
        {
            name: "Ruby",
            slug: "/languages/ruby",
            icon: <DiRuby size={20} />
        },
        {
            name: "Go",
            slug: "/languages/go",
            icon: <DiGo size={20} />
        }
    ];

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-lg my-1">Languages</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu className="gap-3">
                    {languages.map((item) => (
                        <nav key={item.name}>
                            <Link
                                to={item.slug}
                                aria-label={`Go to ${item.name}`}
                                onClick={() => setIsLanguageActive(item.name)}
                                className={`flex items-center gap-2 rounded-md px-2 py-1 text-lg font-normal text-sidebar-foreground cursor-pointer ${
                                    isLanguageActive === item.name
                                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                }`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        </nav>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}

export default LanguagesNav;
