import React, { FC } from 'react'
interface FooterProps{
    copy: string
}
const Footer:FC<FooterProps> = ({copy}) => {
  return (
    <footer className='w-full text-center '>
        <a href="https://www.adrianajisepta.my.id/"> <p className='text-xs text-gray-400'>{copy}</p></a>
    </footer>
  )
}

export default Footer
