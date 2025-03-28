import { LuSunDim } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { RiTelegram2Fill  } from "react-icons/ri";



const Header = ({isDark, setIsDark, isNavOpen, setIsNavOpen}:any) => {

    const handleDark = () => {
        setIsDark(!isDark)
    }

    const handleShowNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }



    
  return (

    <div className={`flex justify-center relative z-50 ${isDark === true ? 'text-white' : 'text-black'} `}>
        <div className='bg-gradient-to-r from-purple-500 to-blue-500 gap-3 text-white fixed flex items-center m-auto lg:justify-center justify-between w-full py-4 px-6 text-center lg:text-lg text-base'>
            <h2>Ship your daApps faster 🚀</h2>
            <a href='https://betauidocs.vercel.app/docs/Components/web3/NFTCard' >
                <button className='bg-white p-1.5 px-3 text-xs rounded text-black opacity-80'>Learn More</button>
            </a>
        </div>

        <div className={`${isDark === true ? '': 'bg-white'} flex items-center fixed lg:w-[100%] w-[100%] lg:top-[3.5rem] top-[3.5rem]  lg:py-4 py-4 lg:px-[15rem] px-5 backdrop-filter backdrop-blur-3xl bg-opacity-60 `}>
            <div className='block'>
                <div className='flex items-center gap-2'>
                    {/* <img src={logo} className='w-5' alt="" /> */}
                    <p className='text-2xl font-bold'>BetaUI</p>
                </div>
            </div>

            <ul className='hidden lg:flex items-center gap-10 text-base ml-auto'>
                <a href="https://github.com/brightphi210/brightui" target="_blank" rel="noopener noreferrer">
                    <li className='cursor-pointer text-2xl hover:scale-110'><FaGithub /></li>
                </a>

                <a href="https://t.me/betauilibary" target="_blank" rel="noopener noreferrer">
                    <li className='cursor-pointer text-2xl hover:scale-110'><RiTelegram2Fill  /></li>
                </a>
                <a href="https://betauidocs.vercel.app/docs/Beginning/intro">
                    <button className={`text-sm px-4 py-2.5 font-medium ${isDark === true ? 'bg-white text-gray-900' : 'bg-gray-100 border border-gray-200 text-gray-900'} rounded-lg`}>Get Started</button>
                </a>
                
                <div className='flex gap-10' onClick={handleDark}>
                    {isDark === true ? 
                        <p className={`${isDark === true ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} cursor-pointer flex rounded-full p-2 text-lg`}><LuSunDim /></p> :
                        <p className={`${isDark === true ? 'bg-gray-950 text-white' : 'bg-gray-200 text-gray-800'} cursor-pointer flex rounded-full p-2 text-base`}><IoMdMoon /></p>
                    }
                </div>
            </ul>

            <div className='lg:hidden flex items-center gap-3 ml-auto'>
                <div className='flex gap-10' onClick={handleDark}>
                    {isDark === true ? 
                        <p className={`${isDark === true ? 'bg-gray-800 text-white' : 'bg-neutral-10 text-neutral-900 border border-gray-800'} cursor-pointer flex rounded-full p-2.5 text-lg`}><LuSunDim /></p> :
                        <p className={`${isDark === true ? 'bg-gray-800 text-white' : 'bg-neutral-10 text-neutral-900 border border-gray-800'} cursor-pointer flex rounded-full p-2.5 text-lg`}><IoMdMoon /></p>
                    }
                </div>
                <p className={`text-lg flex items-center ${isDark === true ? 'border border-gray-800 text-white' : 'border border-gray-800 text-gray-800'}  rounded-full p-2.5`} 
                    onClick={handleShowNavbar}><RiMenu3Fill />
                </p>
            </div>
        </div>
        

        {isNavOpen === true && 
            <div className={`lg:hidden block fixed backdrop-filter backdrop-blur-3xl bg-opacity-60 ${isDark === true ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'} left-0 top-[3.5rem] p-10 pt-14  w-full h-screen`}>
                <ul className='flex-col items-center text-2xl ml-auto '>
                    <a href="https://github.com/brightphi210/brightui" target="_blank" rel="noopener noreferrer">
                        <li className='cursor-pointer text-xl mb-8 flex items-center gap-2'><FaGithub /> Github</li>
                    </a>

                    <a href="https://t.me/betauilibary" target="_blank" rel="noopener noreferrer">
                        <li className='cursor-pointer text-xl mb-8 flex items-center gap-2'><RiTelegram2Fill /> Telegram</li>
                    </a>


                    <a href="https://betauidocs.vercel.app/docs/Beginning/intro"     
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        <button className={`text-sm px-6 py-3 font-semibold ${isDark === true ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} rounded-lg`}>Get Started</button>
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