import React from 'react'
import { products } from '../constants'
import { PopuplarProductCard } from '../components'

const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente deserunt asperiores consequuntur voluptates modi ipsum ex a, tempore iure.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 grid-cols-1 sm:gap-4 gap-14">
        {
          products.map((product)=>(
              <PopuplarProductCard key={product.name} {...product}/>
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts