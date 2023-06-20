import Link from "next/link"
import Image from "next/image"
import {CustomButton} from "@/components";

const Navbar=()=>{

    const Login=()=>{
        console.log("Login Click");
    }

    return<>
       <header className="w-full absolute z-20">
           <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
               <Link href="/" className="flex justify-center items-center">
                  <div className="flex items-center justify-center gap-2 ">
                      <Image src="/new_Logo.png"
                             alt="Car Hub Logo"
                             width={68}
                             height={17}
                             className="object-contain"/>
                      <p className="text-2xl font-black">Yeni Camoluk Otomotiv</p>
                  </div>
               </Link>
               <CustomButton
                   title="Sign In"
                   btnType="button"
                   containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] p-2 font-semibold border-2" handleClick={Login}/>
           </nav>
       </header>
    </>
}
export default Navbar;