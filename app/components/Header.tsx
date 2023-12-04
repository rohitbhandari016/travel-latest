import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='p-5 flex justify-center bg-slate-50'>
      <Image src={"/mountain.png"} alt="logo" width={40} height={10} />
    </div>
  )
}

export default Header