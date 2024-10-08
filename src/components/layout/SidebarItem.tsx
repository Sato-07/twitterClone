import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router"
import { FC, useCallback } from "react"
import { IconType } from "react-icons"
import { LoginModal } from "../modals/LoginModal";
import { useLoginModal } from "@/hooks/useLoginModal";


interface SidebarItemProps{
    label:string,
    href?:string,
    icon:IconType,
    onClick?:()=> void
    auth?:boolean;

}


export const SidebarItem: FC<SidebarItemProps> = ({label,href,onClick,icon:Icon, auth}) =>{

    const {data: currentUser} = useCurrentUser( )
    const loginModal = useLoginModal()
    const router = useRouter()
    const handleClick = useCallback(() => {
        if(onClick){
            return onClick()
        }
        if(auth && !currentUser){
            loginModal.onOpen()
        }
        else if(href){
            router.push(href)
        }
    },[router, onClick,href, currentUser, loginModal, auth])

    return(
        <div onClick={handleClick} className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon size={28} color="white"/>
            </div>
            <div className="relative hidden rounded-full lg:flex items-center gap-4 p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer ">
                <Icon size={24} color="white"/>
                <p className="hidden lg:block text-white text-xl">
                    {label}
                </p>
            </div>
        </div>
    )
}