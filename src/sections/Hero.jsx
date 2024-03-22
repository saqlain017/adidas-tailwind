import React,{useState} from 'react'
import { Button,ShoeCard} from '../components/index.js'
import { arrowRight } from '../assets/icons'
import { statistics,shoes } from '../constants'
import { bigShoe1 } from '../assets/images'

const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1);
  return (
    <section 
    id='Home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl text-coral-red font-montserrat'>Our Summer Collection</p>
        <h1 className='text-8xl mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Adidas</span>
          </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mb-14 sm:max-w-sm'>
          Discover stylish Adidas arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Show Now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start w-full flex-wrap mt-20 gap-16">
          {statistics.map((stat,index)=>(
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          )
          )}
        </div>
      </div>
      <div className='flex-1 flex justify-center relative items-center max-xl:py-40 xl:min-h-screen bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="shoe-colletion" width={610} height={500} className='object-contain relative z-10'/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 '>
          {shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard imgURL={shoe} index={index} changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}} bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero