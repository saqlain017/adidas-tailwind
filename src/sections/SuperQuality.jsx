import React from 'react'
import { Button } from '../components'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className="flex flex-col flex-1">
      <h2 className='text-4xl capitalize font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg'>
         We Provide You <span className='text-coral-red'>Super</span> <span className='text-coral-red'>Shoes</span>
          </h2>
        <p className='font-montserrat mt-4 info-text lg:max-w-lg'>
          Discover stylish Adidas arrivals, quality comfort, and innovation for your active life. Discover stylish Adidas arrivals, quality comfort, and innovation for your active life.
        </p>
        <p className='font-montserrat mt-6 info-text lg:max-w-lg'>
        Discover stylish Adidas arrivals, quality comfort.
        </p>
        <div className='mt-11'>
          <Button label="View Details"/>
        </div>
        
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="Shoe" height={570} width={522} className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality