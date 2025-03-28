import { useEffect, useRef, useState } from 'react';
import {Button } from '../components/Button';
import { StackIcon, SponsorsIcon } from '../components/StackIcons';
import { stats, users } from '../components/Works';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { BiCode } from 'react-icons/bi';

const Home = ({isDark, speed = 3000, direction = 'left' }:any) => {

    const dark = 'bg-gradient-to-bl from-gray-950 via-gray-950 to-gray-950 text-white '
    const light = 'bg-gray-50 text-black'

    const handleMail = () => {
        window.open('https://betauidocs.vercel.app/docs/Beginning/intro')
    }


    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const container = containerRef.current
      if (!container) return
  
      const totalWidth = container.scrollWidth
      const viewportWidth = container.offsetWidth
  
      const animate = () => {
        if (direction === 'left') {
          if (currentIndex >= totalWidth) {
            setCurrentIndex(0)
          } else {
            setCurrentIndex(prev => prev + 1)
          }
        } else {
          if (currentIndex <= -viewportWidth) {
            setCurrentIndex(totalWidth - viewportWidth)
          } else {
            setCurrentIndex(prev => prev - 1)
          }
        }
      }
  
      const intervalId = setInterval(animate, speed / 100)
  
      return () => clearInterval(intervalId)
    }, [currentIndex, speed, direction])


  return (
    <div>
        <section id='home' className={`flex overflow-hidden items-center lg:gap-[10rem] lg:pt-[13rem] pt-[10rem] lg:pb-[2rem] 2xl:px-[15rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light}  `}>
            <div className='w-full justify-center text-center' data-aos="fade-up" data-aos-duration="600">

                <button className='bg-neutral-200 py-2 px-5 rounded-full text-sm text-gray-800 mb-5'>Beta version of Beta UI 🚀</button>
                <h2 className=' 2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl lg:pt-3 pt-0 font-bold'>
                    Simplifying Modern Interface <br className='lg:block hidden'/> Design with 
                    <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold'> Beta UI</span>
                </h2>
                <p className='lg:w-[50%] flex justify-center text-center m-auto w-full  pt-6 2xl:text-lg xl:text-base lg:text-sm text-sm  font-light lg:leading-[40px] leading-[20px]'>
                    Beta UI is a sleek, modular, and developer-friendly UI library designed to accelerate 
                    the creation of modern, responsive, and accessible user interfaces.
                </p>
                
                <div className='flex justify-center m-auto items-center mt-5 gap-3'>
                    <Button title='Get Started' action={handleMail}/>
                    <button className='bg-neutral-800 flex items-center gap-2 text-sm text-white lg:w-fit font-light py-3 px-5 rounded-md cursor-default'>
                        <span><LuGithub className='text-lg' /></span> Github
                    </button>
                </div>

            </div>

        </section>

        

        <div className={`${isDark === true ? dark : light} py-[3rem]`}>

        {/* Code Preview */}
          <div className="max-w-4xl w-[90%] mx-auto">
            <div className="rounded-lg border-2 border-neutral-200 shadow-sm">
              <div className="flex items-center border-b-2 border-neutral-200 px-4 h-10">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-muted-foreground">Code Sample</div>
                <button className="p-1 hover:bg-muted rounded">
                  <MdContentCopy className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-4 overflow-x-auto text-sm font-mono">
                <pre className="text-sm">
                  <code className="language-tsx">
                    {`import { Button } from "betaui/components";

export default function Example() {
    return (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold">Welcome to BetaUI</h2>
        <p>Start building beautiful interfaces in minutes</p>
        <Button>Get Started</Button>
    </div>
    );
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
         
            {/* =========== WHY BETA UI ============== */}
            <section className={`2xl:px-[15rem] xl:px-[10rem] lg:px-[8rem] lg:py-[3rem] py-[3rem] px-5 w-full lg:gap-[5rem] gap-[3rem] `}>
                <p className='pb-3 text-center'>Why build with Beta UI?</p>
                <h2 className='2xl:text-3xl xl:text-3xl lg:text-3xl text-3xl text-center'>Ship <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold'> Faster
                    </span> with Beta UI
                </h2>

                <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 pt-10 gap-4'>
                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gray-950 border-gray-800' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-gray-800 text-white flex items-center justify-center rounded-full w-fit p-3'><BsFillLightningChargeFill /></p>
                        <h2 className='py-4 text-lg'>Increase Development Speed</h2>
                        <p className='text-sm font-normal'>
                            Beta UI offers a rich library of predesigned, 
                            reusable components that eliminate the need for building UI 
                            elements from scratch.
                        </p>
                    </div>


                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gray-950 border-gray-800' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-gray-800 text-white flex items-center justify-center rounded-full w-fit p-3'><FaTools /></p>
                        <h2 className='py-4 text-lg'>Intuitive customization</h2>
                        <p className='text-sm font-normal'>
                            Our components are as flexible as they are 
                            powerful. You always have full control over 
                            how they look and behave.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gray-950 border-gray-800' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-gray-800 text-white flex items-center justify-center rounded-full w-fit p-3'><MdAlignHorizontalLeft /></p>
                        <h2 className='py-4 text-lg'>Consistent Design System</h2>
                        <p className='text-sm font-normal'>
                            With a cohesive design system, Beta UI ensures visual 
                            consistency across applications.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gray-950 border-gray-800' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-gray-800 text-white flex items-center justify-center rounded-full w-fit p-3'><BiCode /></p>
                        <h2 className='py-4 text-lg'>TypeScript Ready</h2>
                        <p className='text-sm font-normal'>Written in TypeScript with full type definitions.</p>
                    </div>


                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gray-950 border-gray-800' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-gray-800 text-white flex items-center justify-center rounded-full w-fit p-3'><IoDocumentTextSharp /></p>
                        <h2 className='py-4 text-lg'>Unrivaled documentation</h2>
                        <p className='text-sm font-normal'>
                            Whatever challenge you face, our documentation has you covered. 
                            it contains solutions, guides, and best practices crafted to keep you moving forward.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gray-950 border-gray-800' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-gray-800 text-white flex items-center justify-center rounded-full w-fit p-3'><LuGithub /></p>
                        <h2 className='py-4 text-lg'>Open Source</h2>
                        <p className='text-sm font-normal'>
                            Free and open source under the MIT license.
                        </p>
                    </div>
                </div>
            </section>


            <section className='2xl:px-[15rem] xl:px-[10rem] lg:px-[8rem] lg:py-[3rem] py-[2rem] px-5 w-full lg:gap-[5rem] gap-[3rem] '>
                <div className='text-center font-normal' data-aos="fade-up" data-aos-duration="600">
                    <p className='text-base'>From developers to Companies</p>
                    <h2 className='text-3xl'>Teams using 
                        <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold'> BetaUI
                        </span>
                    </h2>
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-2 text-sm gap-4 pt-10' data-aos="fade-up" data-aos-duration="600">
                    {users.map((user)=>(
                        <div className={`${ isDark === true ?  'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800' } rounded-md p-4 flex gap-2 items-center justify-center opacity-80`}>
                            <h2>{user.name}</h2>
                        </div>
                    ))}
                </div>
            </section>

            <section className='2xl:px-[15rem] xl:px-[10rem] lg:px-[8rem] lg:py-[3rem] py-[2rem] px-5 w-full lg:gap-[5rem] gap-[3rem] ' 
                data-aos="fade-up" data-aos-duration="600">
                <div className='text-center font-normal'>
              
                    <p className='text-base'>Built by developers for developer</p>
                    <h2 className='2xl:text-3xl xl:text-3xl lg:text-3xl text-3xl py-4 '>Built for all
                        <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold'> Developers</span> 
                    </h2>
                </div>
                <div className='grid lg:grid-cols-3 lg:px-[5rem] grid-cols-2 pt-10 justify-center'>
                    {stats.map((stat)=>(
                        <div className={`${isDark === true ? 'border border-gray-800' : 'border border-gray-300'} p-4 flex flex-col gap-1 items-center justify-center opacity-80`}>
                            <h2 className='lg:text-2xl text-2xl flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold'>
                            {stat.number}<span className='text-white text-2xl'>{stat.icon}</span> 
                            </h2>
                            <h2 className='text-sm'>{stat.label}</h2>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========== SUPPORTED FRAMEWORK ============== */}
            <div className='text-center lg:py-[3rem] py-[2rem] px-5' data-aos="fade-up" data-aos-duration="600">
                <h2 className=' 2xl:text-3xl xl:text-3xl lg:text-3xl text-4xl lg:pt-3 pt-0 font-normal'>
                    Works with your favorite  
                    <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold'> framework</span>
                </h2>
                <p className='font-light text-xl pt-5 '>Beta UI supports most modern frameworks
                </p>

                <div className='flex flex-wrap gap-4 items-center justify-center m-auto mt-10'>
                    {StackIcon.map((icon)=>(
                        <div className={` p-6 border rounded-md text-4xl 
                            ${isDark === true ? 'bg-gray-950 border-gray-800' : 'border-gray-200'}`}>
                            <p>{icon.icon}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-center bg-gray-950 border-gray-800 border lg:w-[60%] w-[95%] text-white rounded-3xl justify-center m-auto py-[2rem] px-5' data-aos="fade-up" data-aos-duration="600">
                <p className='font-light text-sm pt-5 '>Sponsors</p>
                <h2 className='2xl:text-3xl xl:text-3xl lg:text-3xl text-3xl py-4'>Sponsored by these
                <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold'> amazing </span> 
                companies </h2>
                
                <div className='flex flex-wrap gap-4 justify-center m-auto mt-10'>
                    {SponsorsIcon.map((icon:any)=>(
                        <div className={` p-4 px-6 rounded-md bg-gray-800`}>
                            <img src={icon.image} className='w-20 m-auto' alt="" />
                            <p className='pt-1 text-[10px] text-center'>{icon.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    </div>
  )
}

export default Home