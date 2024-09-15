import { BiHome, BiLogOut } from "react-icons/bi";

import { BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { SideBarLogo } from "./SidebarLogo";
import { SidebarItem } from "./SidebarItem";
import { SidebarTweetButton } from "./SidebarTweetButton";
import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from "next-auth/react";
export const Sidebar = () => {

    const { data: currentUser } = useCurrentUser()

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BiHome
        },
        {
            label: 'Notifications',
            href: '/notification',
            icon: BsBellFill,
            auth: true
        },
        {
            label: 'Profile',
            href: '/profile',
            icon: FaUser,
            auth: true
        },
    ];

    return (
        <div className="h-full md:pr-6"> 
            <div className="flex flex-col items-start"> 
                <div className="space-y-2 lg:w-[230px]">
                    <SideBarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            auth={item.auth}
                        />
                    ))}
                    {currentUser && (
                        <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />

                    )}
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
}
