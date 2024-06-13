import Image from 'next/image'
import React from 'react'
import { SheetDemo } from '../Sheet'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='grid grid-cols-2 items-center justify-center ml-9 '>
        <div >
            <Image src="/Logo.png" alt='Logo' width={250} height={250}></Image>
        </div>

        <div className='text-center mr-52 hidden lg:block md:block '>
          <Link href="/">  <button className='bg-amber-500 rounded-full px-20 py-3 hover:bg-amber-200 shadow-2xl hover:shadow-black text-white'>Home</button></Link>
        </div>

        <div className='hidden sm:block lg:hidden md:hidden'>
          <SheetDemo/>
        </div>
    </div>
  )
}
