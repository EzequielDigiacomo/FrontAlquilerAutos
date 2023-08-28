import React, { useCallback, useState } from 'react'
import PrevButton from '../atoms/PrevButton'
import NextButton from '../atoms/NextButton'
import FordEscort from '../../assets/Imagenes/Autos/FordEscort.jpg'

import AudiA4 from '../../assets/Imagenes/Autos/AudiA4.jpg'
import AudiA5 from '../../assets/Imagenes/Autos/AudiA5.jpeg'
import Peugeot408 from '../../assets/Imagenes/Autos/Peugeot408.jpg'

const ARRAY_IMGS = [AudiA4, AudiA5, Peugeot408, FordEscort ]

const SlideProduct = ()=> {

const [index, setIndex] = useState (0)


    const clickNext = () => { 
        //operaror ternario
        (index === ARRAY_IMGS.length - 1) ?  setIndex(0) :
        setIndex(index + 1)
    }

    const clickPrev = () => { 
       if(index === 0) return setIndex(ARRAY_IMGS.length - 1);
       setIndex(index -1)
    }


    return (
        <section className='grid md:grid-cols-4 md:gap-4'>
           <div className='col-span-4 relative '>
                 <img src={ARRAY_IMGS[index]} alt="" className='aspect-[16/9] w-full md:aspect-[16-9] md:rounded-md'/>
                 <div className='absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-2'>
                    <button className='h-6 w-6 rounded-full bg-slate-200 grid places-items-center' onClick={clickPrev}><PrevButton/></button>
                    <button className='h-6 w-6 rounded-full bg-slate-200 grid places-items-center' onClick={clickNext}><NextButton/></button>
                </div>
                 
            </div>
            <img src={AudiA4} alt="" className='hidden md:block md:h-14 md:rounded-md' />
            <img src={AudiA5} alt="" className='hidden md:block md:h-14 md:rounded-md'/>
            <img src={Peugeot408} alt="" className='hidden md:block md:h-14 md:rounded-md'/>
            <img src={FordEscort} alt="" className='hidden md:block md:h-14 md:rounded-md' />
        </section>
    )
}

SlideProduct.propTypes = {}

export default SlideProduct