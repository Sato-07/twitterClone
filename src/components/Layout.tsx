import { FC } from 'react'
import { Sidebar } from './layout/Sidebar'
import FollowBar  from './layout/FollowBar'

interface LayoutProps{
    children : React.ReactNode,
}


export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className='h-screen bg-black'>
        <div className='container h-full  mx-auto  lg:max-w-7xl'>
            <div className='grid grid-cols-4  h-full'>
                <Sidebar/>
                <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800 '>
                    {children}
                </div>
                <FollowBar/>

            </div>  
        </div>
    </div>
  )
}
 