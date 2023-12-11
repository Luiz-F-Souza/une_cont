import Image from "next/image"
import Logo from "@/assets/logo_no_bg.png"
import Profile from "@/assets/profile.jpeg"
import { IoIosMenu } from "react-icons/io"
import { ToggleMenuButton } from "./ToggleMenuButton"


export const Header = () => {
  
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-2 md:px-8">
      <div className="flex items-center">
        <ToggleMenuButton />  

        <section className="flex items-center">
          <Image src={Logo} alt="" width={48} height={48} />
          <h1 className="font-bold">UneCont</h1>
        </section>
      </div>

      <section className="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-100 hover:shadow-sm p-2 rounded-md  ">
        <Image
          src={Profile}
          alt="Sua foto de perfil"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div>
          <p className="font-bold text-sm mb-1">Luiz Felipe</p>
          <p className="text-zinc-400 text-xs font-bold">Super Admin</p>
        </div>
      </section>
    </header>
  )
}
