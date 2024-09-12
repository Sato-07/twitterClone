import { BiHome, BiLogOut } from "react-icons/bi";

import { BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { SideBarLogo } from "./SidebarLogo";
import { SidebarItem } from "./SidebarItem";
import { SidebarTweetButton } from "./SidebarTweetButton";

export const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BiHome
        },
        {
            label: 'Notifications',
            href: '/notification',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/profile',
            icon: FaUser
        },
    ];

    return (
        <div className="h-full md:pr-6"> {/* Ajout de p-5 pour le padding */}
            <div className="flex flex-col items-start"> {/* Changement de items-end à items-start */}
                <div className="space-y-2 lg:w-[230px]">
                    <SideBarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                    <SidebarItem onClick={() => { }} icon={BiLogOut} label="Logout" />
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
}
