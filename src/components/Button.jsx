import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full text-lg leading-none bg-coral-red text-white border-coral-red'>
        {label}
        {iconURL &&  <img src={iconURL} alt="button-icon" className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button