import { FC } from "react"
import React from "react"
import useUser from "../../hooks/useUser"
import Avatar from '../Avatar'
import Image from "next/image"

interface userHeroProps{
    userId: string,

}

const UserHero: FC<userHeroProps> = ({userId})=>{
    const {data: fetchedUser } = useUser(userId)
    
    return(
        <div>
            <div className=" bg-neutral-700 relative h-44">
                {fetchedUser?.coverImage && (
                    <Image
                    src={fetchedUser?.coverImage}
                    fill
                    alt="Cover Image"
                    style={{objectFit:'cover'}}
                    />
                )}
                <div className="absolute -bottom-16 left-4">
                    <Avatar userId={userId} isLarge hasBorder/>

                </div>
            </div>
        </div>
    )
}

export default UserHero