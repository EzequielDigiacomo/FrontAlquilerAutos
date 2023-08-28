import React from 'react'
import CartIcons from '../atoms/CartIcons'
import PropTypes from 'prop-types'

const DetailProduct = props => {
  return (
    <section className='container mx-auto px-4 md:px-0'>
                <p className='text-red-700 font-bold text-2l uppercase tracking-wide'>
                    AutoRent</p>
                <h2 className='text-2xl font-bold mb-3'>
                    Titulo de producto
                </h2>

                <p className='text-neutral-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem vel voluptates rerum possimus praesentium ipsum nisi rem aliquid
                </p>

                <div className='grid grid-cols-3 font-bold items-center mb-5 md:gap-1 md:grid-cols-[1fr_3fr] '>
                    <span className="text-2xl" >
                        $123.00
                    </span>
                    <span className="bg-red-100 mr-auto rounded-md p-1 text-red-700">
                        50%
                    </span>
                    <span className="text-right text-neutral-600 line-through md:col-span-2 md:text-left">
                        $246.00
                    </span>
                    
                </div>

                <div className='grid grid-cols-3 font-bold md:grid-cols-[1fr_1.5fr]'>
                    <div className='col-span-3 bg-gray-300 flex items-center justify-between py-2 px-5 rounded-md md:col-span-1 mb-1 md:h-14 '>
                        <button className='text-xl text-red-700 '>
                            -
                        </button>
                        <span className='text-3xl'>
                            0
                        </span>
                        <button className='text-xl text-red-700'
                        >+
                        </button>
                    </div>
                     <button className='mx-3 col-span-3 bg-red-400 text-black py-1 rounded-md flex gap-3 items-center justify-center hover:bg-red-300 transition-all md:col-span-1 md:h-14'>
                        <CartIcons className='w-6' />
                       
                        <span>Add to Cart</span>
                    </button>
                </div>
            </section>
  )
}

DetailProduct.propTypes = {}

export default DetailProduct