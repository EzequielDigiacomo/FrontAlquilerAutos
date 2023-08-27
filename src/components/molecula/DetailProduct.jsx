import React from 'react'
import PropTypes from 'prop-types'

const DetailProduct = props => {
  return (
    <section>
                <p>Descripcion del producto</p>
                <h2>Titulo de profucto</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem vel voluptates rerum possimus praesentium ipsum nisi rem aliquid
                </p>

                <p>
                    <spam>$1234.55</spam>
                    <spam>50%</spam>
                </p>

                <p>$2469.0</p>
                <div>
                    <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                </div>
                <button>Add to cart</button>
            </section>
  )
}

DetailProduct.propTypes = {}

export default DetailProduct