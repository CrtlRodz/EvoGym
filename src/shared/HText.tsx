import React from 'react'

type Props = {
    children:React.ReactNode
}

export const HText= ({children}: Props) => {
  return (
    <h1 className='basis-3/5 font-montserrat test-3xl font-bold'>{children} </h1>
  )
}