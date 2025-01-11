import { useEffect, useRef, useState } from 'react';
import {Button } from '../components/Button';
import { StackIcon } from '../components/StackIcons';
import { items } from '../components/Works';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


import { CodeBlock, hybrid} from 'react-code-blocks';

const Home = ({isDark, speed = 3000, direction = 'left' }:any) => {

    const dark = 'bg-gradient-to-bl from-black via-[#011108] to-black text-white '
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

    const code = `
        npx create-react-app my-beta-ui-app
        cd my-beta-ui-app

        npm install @brightcodeui/beta-ui
        # or
        yarn add @brightcodeui/beta-ui


        import { Button, Input } from '@brightcodeui/beta-ui';

        function App() {
        return (
            <div>
                <Button>Click me</Button>
                <Input placeholder="Enter text" />
            </div>
        );
        }
    `


  return (
    <div>
        <section id='home' className={`flex overflow-hidden items-center lg:gap-[10rem] lg:pt-[13rem] pt-[10rem] lg:pb-[8rem] 2xl:px-[15rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light}  `}>
            <div className='w-full justify-center text-center' data-aos="fade-up" data-aos-duration="600">

                <button className='bg-[#082e26] py-2 px-5 rounded-md text-sm text-[#98ffe9] mb-5'>Beta version of Our UI Libary 🚀</button>
                <h2 className=' 2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl lg:pt-3 pt-0 font-bold'>
                    Simplifying Modern Interface <br className='lg:block hidden'/> Design with 
                    <span className='bg-gradient-to-l from-[#03745b] to-[#03745b] bg-clip-text text-transparent font-extrabold'> Beta UI</span>
                </h2>
                <p className='lg:w-[50%] flex justify-center text-center m-auto w-full  pt-6 2xl:text-lg xl:text-base lg:text-sm text-sm  font-light lg:leading-[40px] leading-[20px]'>
                    Beta UI is a sleek, modular, and developer-friendly UI library designed to accelerate 
                    the creation of modern, responsive, and accessible user interfaces.
                </p>
                
                <div className='flex lg:flex-row flex-col justify-center m-auto items-center mt-5 gap-3'>
                    <Button title='Start Building' action={handleMail}/>
                    <button className='border border-[#145547] lg:w-fit w-full font-light py-3 px-5 rounded-lg cursor-default'>npm install @brightcodeui/beta-ui</button>
                </div>

            </div>
        </section>

        <div className={`${isDark === true ? dark : light} py-[3rem]`}>
         
            <div className={`overflow-hidden whitespace-nowrap w-full `}>
                <div
                    ref={containerRef}
                    className="inline-flex transition-transform duration-1000 ease-linear"
                    style={{ transform: `translateX(${-currentIndex}px)` }}
                    >
                    {items.map((item: any, index: any) => (
                        <div
                        key={index}
                        className={`flex-shrink-0 overflow-hidden lg:w-[25%]  p-5 w-[50%] mx-2 rounded-lg ${isDark === true ? 'border border-[#0c3129]' : 'border border-[#e2e7e6]'}`}
                        >
                        <img
                            src={item}
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                        </div>
                    ))}
                    {items.map((item: any, index: any) => (
                        <div
                        key={`duplicate-${index}`}
                        className={`flex-shrink-0 overflow-hidden lg:w-[25%]  p-5 w-[50%] mx-2 rounded-lg ${isDark === true ? 'border border-[#0c3129]' : 'border border-[#e2e7e6]'}`}
                        >
                        <img
                            src={item}
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                        </div>
                    ))}
                </div>
            </div>

            <section className={`2xl:px-[15rem] xl:px-[10rem] lg:px-[8rem] lg:py-[5rem] py-[3rem] px-5 w-full lg:gap-[5rem] gap-[3rem] `}>
                <p className='pb-3'>Why build with Beta UI?</p>
                <h2 className='2xl:text-5xl xl:text-4xl lg:text-3xl text-4xl'>Ship Products  <br className='lg:block hidden'/> <span className='bg-gradient-to-l from-[#03745b] to-[#03745b] bg-clip-text text-transparent'> Faster
                    </span> with Beta UI
                </h2>

                <div className='grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 pt-10 gap-4'>
                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gradient-to-r from-[#08110f] to-[#01110e] border-[#0a2b25]' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-[#0a2b25] text-white flex items-center justify-center rounded-full w-fit p-3'><BsFillLightningChargeFill /></p>
                        <h2 className='py-4 text-lg'>Increase Development Speed</h2>
                        <p className='text-sm font-normal'>
                            Beta UI offers a rich library of predesigned, 
                            reusable components that eliminate the need for building UI 
                            elements from scratch. This enables developers to focus more on 
                            business logic and functionality, speeding up project timelines.
                        </p>
                    </div>


                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gradient-to-r from-[#08110f] to-[#01110e] border-[#0a2b25]' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-[#0a2b25] text-white flex items-center justify-center rounded-full w-fit p-3'><FaTools /></p>
                        <h2 className='py-4 text-lg'>Intuitive customization</h2>
                        <p className='text-sm font-normal'>
                            Our components are as flexible as they are 
                            powerful. You always have full control over 
                            how they look and behave.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gradient-to-r from-[#08110f] to-[#01110e] border-[#0a2b25]' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-[#0a2b25] text-white flex items-center justify-center rounded-full w-fit p-3'><MdAlignHorizontalLeft /></p>
                        <h2 className='py-4 text-lg'>Consistent Design System</h2>
                        <p className='text-sm font-normal'>
                            With a cohesive design system, Beta UI ensures visual 
                            consistency across applications. It includes standardized typography, 
                            color schemes, and responsive layouts, resulting in a polished and 
                            professional look without extra design effort.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="600" className={` p-5 border rounded-lg 
                        ${isDark === true ? 'bg-gradient-to-r from-[#08110f] to-[#01110e] border-[#0a2b25]' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                        <p className='bg-[#0a2b25] text-white flex items-center justify-center rounded-full w-fit p-3'><IoDocumentTextSharp /></p>
                        <h2 className='py-4 text-lg'>Unrivaled documentation</h2>
                        <p className='text-sm font-normal'>
                            Whatever challenge you face, our documentation has you covered. 
                            it contains solutions, guides, and best practices crafted to keep you moving forward.
                        </p>
                    </div>
                </div>
            </section>


            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 items-center 2xl:px-[15rem] xl:px-[10rem] lg:px-[8rem] lg:py-[6rem] py-[3rem] px-5'>
                <div data-aos="fade-up" data-aos-duration="600">
                    <p className=''>Start Building 🚀</p>
                    <h2 className='2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl py-4'>Start building <br className='lg:block hidden'/> 
                    now  with <span className='bg-gradient-to-l from-[#03745b] to-[#03745b] bg-clip-text text-transparent'>Beta UI</span> </h2>
                    
                    <div className='lg:w-[70%] font-light '>
                        <p className='text-neutral-400'>Spend less time writing UI code and more time building a great experience for your customers.</p>
                        <ul className='pt-5 text-lg'>
                            <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-[#1f9279]'/> Setup your project</li>
                            <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-[#1f9279]'/> Install Beta UI Package</li>
                            <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-[#1f9279]'/> Start using our components</li>
                        </ul>
                    </div>
                </div>
                
                <div className='myCodeClass' data-aos="fade-up" data-aos-duration="600">
                    <CodeBlock
                        text={code}
                        language={'jsx'}
                        showLineNumbers={true}
                        theme={hybrid}
                        customStyle={{
                            margin: '0px 0.75rem',
                            borderRadius: '5px',
                            boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
                            fontSize: '15px',
                        }}
                    />
                </div>
            </div>


            <div className='text-center lg:py-[6rem] py-[3rem] px-5' data-aos="fade-up" data-aos-duration="600">
                <h2 className=' 2xl:text-5xl xl:text-4xl lg:text-3xl text-4xl lg:pt-3 pt-0 font-normal'>
                    Works with your favorite <br className='lg:block hidden'/> application  
                    <span className='bg-gradient-to-l from-[#03745b] to-[#03745b] bg-clip-text text-transparent font-bold'> framework</span>
                </h2>
                <p className='font-light text-xl pt-5 '>Beta UI provides a consistent  developer 
                    <br className='lg:block hidden'/> experience for most modern frameworks
                </p>

                <div className='flex flex-wrap gap-4 items-center justify-center m-auto mt-10'>
                    {StackIcon.map((icon)=>(
                        <div className={` p-8 border rounded-md text-4xl 
                            ${isDark === true ? 'bg-gradient-to-r from-[#08110f] to-[#01110e] border-[#0a2b25]' : 'bg-gradient-to-r border-[#ced6d5] from-[#fdfdfd] to-[#f9fffe]'}`}>
                            <p>{icon.icon}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className='text-center lg:py-[6rem] py-[3rem] px-5' data-aos="fade-up" data-aos-duration="600">
                <p className='font-light text-sm pt-5 '>Start now</p>
                <h2 className=' 2xl:text-5xl xl:text-4xl lg:text-3xl text-4xl lg:pt-3 pt-0 font-normal'>
                    Ship your next  project faster
                </h2>
                
                <div className='flex justify-center m-auto items-center mt-5 gap-3'>
                    <Button title='Discover Components' action={handleMail}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home