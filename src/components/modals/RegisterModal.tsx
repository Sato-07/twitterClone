import { useRegisterModal } from "@/hooks/useRegisterModal"
import { useCallback, useState } from "react"
import { Input } from "../Input";
import { Modal } from "../Modal";
import { useLoginModal } from "@/hooks/useLoginModal";
import {toast} from 'sonner'
import axios from 'axios'
import { signIn } from "next-auth/react";


export const RegisterModal = () =>{
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(async ()=>{
        if(isLoading){
            return
        }
        registerModal.onClose()
        loginModal.onOpen()
    },[isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try{
            setIsLoading(true)

            await axios.post('/api/register',{
                email,
                password,
                username,
                name
            })
            toast.success("Account created");
            signIn('credentials',{
                email,
                password  
            })
            registerModal.onClose()
        }catch(error){
            console.log(error)
            toast.error("Something went wrong");

        }finally{
            setIsLoading(false)
        }
    },[registerModal, email, password ,username, name])
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
             placeholder="Email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             disabled={isLoading}
            />
            <Input
             placeholder="Name"
             onChange={(e) => setName(e.target.value)}
             value={name}
             disabled={isLoading}
            />
            <Input
             placeholder="Username"
             onChange={(e) => setUsername(e.target.value)}
             value={username}
             disabled={isLoading}
            />
            <Input
             placeholder="Password"
             type="password"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p> Already have an account ?
                <span
                 onClick={onToggle}
                 className="text-white cursor-pointer px-2 hover:underline">Sign in</span>
            </p>

        </div>
    )
    return(
        <Modal
         disabled={isLoading}
         isOpen={registerModal.isOpen}
         title="Register"
         actionLabel="Sign up"
         onClose={registerModal.onClose}
         onSubmit={onSubmit}
         body={bodyContent}
         footer={footerContent}
         />

    );
}