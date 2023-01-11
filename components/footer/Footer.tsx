import React, { FC } from 'react'
interface FooterProps{
    copy: string
}
const Footer:FC<FooterProps> = ({copy}) => {
  return (
    <footer className='w-full text-center '>
      <p className='text-xs text-gray-500'>{copy}</p>
    </footer>
  )
}

export default Footer
