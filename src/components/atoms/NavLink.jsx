import React from 'react'

const NavLink = ({text}) => {
  return (
    <a href="" className='group relative py-10'>
        <span className='group-hover:text-red-700'>{text}</span>
        <span className='absolute block bottom-0 left-0 w-full group-hover:bg-red-700 scale-x-0 group-hover:scale-x-100 transition-x-all duration-700  h-1'></span>
    </a>
  )
}

export default NavLink