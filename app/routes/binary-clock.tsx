import React from 'react'

import Clock from '../shared/binary/binary-clock'
import { Header } from '../shared/header'

export default function Home() {
  return (
    <>
      <div className='bg-[#27272c] flex flex-col h-[100vh] w-[100vw] justify-stretch items-center text-white'>
        <div className='flex h-1/3 flex-col justify-center items-center'>
          <Header />
        </div>
        <div className='flex'>
          <Clock />
        </div>
      </div>
    </>
  )
}
