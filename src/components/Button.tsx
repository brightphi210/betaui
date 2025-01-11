import React from 'react'
import { IoMdCloudDownload } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5'


interface ButtonProps{
    title: string;
    action: () => void;
}


interface Button3Props{
  title: string;
}
export const Button: React.FC<ButtonProps> = ({title, action} : ButtonProps) => {
  return (
    <button onClick={action} className='flex gap-3 font-normal text-sm cursor-pointer items-center bg-[#025744] text-white px-5 py-3 justify-center lg:w-fit w-full rounded-md '>
        {title}
        <IoArrowForward />
    </button>
  )
}



export const Button2: React.FC<Button3Props> = ({title} : Button3Props) => {
  return (
    <button className='flex gap-3 font-semibold text-sm cursor-pointer items-center bg-gradient-to-r from-yellow-200 to-pink-300 text-black px-10 py-3 rounded-md mt-5'>
        {title}
        <IoMdCloudDownload />
    </button>
  )
}


export const Button3:React.FC<Button3Props> = ({title}:Button3Props) => {
  return (
    <button className='flex gap-3 font-medium ml-auto text-xs cursor-pointer items-center  text-orange-400 rounded-md'>
        {title}
        <IoArrowForward />
    </button>
  )
}