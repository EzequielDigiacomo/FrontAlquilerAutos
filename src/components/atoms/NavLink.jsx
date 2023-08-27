import React from 'react'

const NavLink = ({text}) => {
  return (
    <a href="" className='group relative py-6'>
        <span className='group-hover:text-pink-400'>{text}</span>
        <span className='absolute block bottom-0 left-0 w-full group-hover:bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-x-all duration-700  h-1'></span>
    </a>
  )
}

export default NavLink