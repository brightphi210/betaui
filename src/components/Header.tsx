
import logo from '../assets/icon.png'
import { LuSunDim } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";


const Header = ({isDark, setIsDark, isNavOpen, setIsNavOpen, handleLinkClick}:any) => {

    const handleDark = () => {
        setIsDark(!isDark)
    }


    const handleShowNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }



    
  return (

    <div className={`flex justify-center relative z-50 ${isDark === true ? 'text-white' : 'text-black'} `}>
        <div className='bg-gradient-to-r from-[#03745b] to-[#a64bfc] fixed w-full py-4 text-center lg:text-lg text-sm'>
            <h2>Web3 Components Coming Soon Beta UI! 🚀</h2>
        </div>

        <div className={`${isDark === true ? '': 'bg-white'} flex items-center fixed lg:w-[100%] w-[100%] lg:top-[3.5rem] top-[3rem]  lg:py-4 py-4 lg:px-[15rem] px-5 backdrop-filter backdrop-blur-3xl bg-opacity-60 `}>
            <div className='block'>
                <div className='flex items-center gap-2'>
                    <img src={logo} className='w-5' alt="" />
                    <p className=''>Beta UI</p>
                </div>
            </div>

            <ul className='hidden lg:flex items-center gap-10 text-sm ml-auto'>
                <li className='cursor-pointer' onClick={() => handleLinkClick("home")}>Home</li>
                <a href="https://betauidocs.vercel.app/docs/Beginning/intro">
                    <li className='cursor-pointer'>Docs</li>
                </a>
                
                <div className='flex gap-10' onClick={handleDark}>
                    {isDark === true ? 
                        <p className={`${isDark === true ? 'bg-[#0a2b25] text-white' : 'bg-[#0a2b25] text-white'} cursor-pointer flex rounded-full p-2 text-lg`}><LuSunDim /></p> :
                        <p className={`${isDark === true ? 'bg-[#0a2b25] text-white' : 'bg-[#0a2b25] text-white'} cursor-pointer flex rounded-full p-2 text-base`}><IoMdMoon /></p>
                    }
                </div>
            </ul>

            <div className='lg:hidden flex items-center gap-3 ml-auto'>
                <div className='flex gap-10' onClick={handleDark}>
                    {isDark === true ? 
                        <p className={`${isDark === true ? 'bg-[#0a2b25] text-white' : 'bg-neutral-10 text-neutral-900 border border-[#0a2b25]'} cursor-pointer flex rounded-full p-2.5 text-lg`}><LuSunDim /></p> :
                        <p className={`${isDark === true ? 'bg-[#0a2b25] text-white' : 'bg-neutral-10 text-neutral-900 border border-[#0a2b25]'} cursor-pointer flex rounded-full p-2.5 text-lg`}><IoMdMoon /></p>
                    }
                </div>
                <p className={`text-lg flex items-center ${isDark === true ? 'border border-[#0a2b25] text-white' : 'border border-[#0a2b25] text-[#0a2b25]'}  rounded-full p-2.5`} 
                    onClick={handleShowNavbar}><RiMenu3Fill />
                </p>
            </div>
        </div>
        

        {isNavOpen === true && 
                <div className={`lg:hidden block fixed ${isDark === true ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'} left-0 top-0 p-10 pt-14  w-full h-screen`}>
                    <ul className='flex-col items-center text-base ml-auto'>
                        <li className='cursor-pointer mb-8' onClick={() => handleLinkClick("home")}>Home</li>
                        <a href="https://betauidocs.vercel.app/docs/Beginning/intro">
                            <li className='cursor-pointer'>Docs</li>
                        </a>
                    </ul>
                    
                    <p onClick={handleShowNavbar} className={`absolute top-10 right-10 text-lg flex items-center 
                        ${isDark === true ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'}  rounded-full p-2.5`}>
                        <IoCloseSharp />
                    </p>
                </div>
            }
        
    </div>
  )
}

export default Header