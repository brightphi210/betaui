
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
        <div className='bg-gradient-to-r from-[#03745b] to-[#a64bfc] gap-3 text-white fixed flex items-center m-auto justify-center w-full py-4 text-center lg:text-lg text-sm'>
            <h2>Ship your daApps with Beta UI! 🚀</h2>
            <a href='https://betauidocs.vercel.app/docs/Components/web3/NFTCard' >
                <button className='bg-white p-1.5 px-3 text-xs rounded text-black opacity-80'>Learn More</button>
            </a>
        </div>

        <div className={`${isDark === true ? '': 'bg-white'} flex items-center fixed lg:w-[100%] w-[100%] lg:top-[3.5rem] top-[3.5rem]  lg:py-4 py-4 lg:px-[15rem] px-5 backdrop-filter backdrop-blur-3xl bg-opacity-60 `}>
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
            <div className={`lg:hidden block fixed backdrop-filter backdrop-blur-3xl bg-opacity-60 ${isDark === true ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'} left-0 top-[3.5rem] p-10 pt-14  w-full h-screen`}>
                <ul className='flex-col items-center text-2xl ml-auto'>
                    <li className='cursor-pointer mb-8' onClick={() => handleLinkClick("home")}>Home</li>
                    <a href="https://betauidocs.vercel.app/docs/Beginning/intro"     
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        <li className='cursor-pointer'>Docs</li>
                    </a>
                </ul>
                
                <p onClick={handleShowNavbar} className={`absolute top-12 right-10 text-2xl flex items-center 
                    ${isDark === true ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'}  rounded-full p-2.5`}>
                    <IoCloseSharp />
                </p>
            </div>
        }
        
    </div>
  )
}

export default Header