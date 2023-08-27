import React from 'react'
import CartIcons from '../atoms/CartIcons'
import PropTypes from 'prop-types'

const DetailProduct = props => {
  return (
    <section className='container mx-auto px-4'>
                <p className='text-red-700 font-bold text-2l uppercase tracking-wide'>
                    AutoRent</p>
                <h2 className='text-2xl font-bold mb-3'>
                    Titulo de producto
                </h2>

                <p className='text-neutral-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem vel voluptates rerum possimus praesentium ipsum nisi rem aliquid
                </p>

                <div className='grid grid-cols-3 font-bold items-center mb-5'>
                    <span className="text-2xl" >$123.00</span>
                    <span className="bg-red-100 mr-auto rounded-md p-1 text-red-700">50%</span>
                    <span className="text-right text-neutral-600 line-through">$246.00</span>
                    
                </div>

                <div className='grid grid-cols-3 font-bold'>
                    <div className='col-span-3 bg-gray-500'>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                     <button className='col-span-3 bg-red-100 text-red-700 py-3 rounded-md flex gap-2 items-center justify-center'>
                        <CartIcons />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </section>
  )
}

DetailProduct.propTypes = {}

export default DetailProduct