import React, { FC, ReactNode } from 'react'

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <div className='container mx-auto w-10/12 min-h-screen h-fit py-6'>
      {children}
    </div>
  )
}

export default Container
