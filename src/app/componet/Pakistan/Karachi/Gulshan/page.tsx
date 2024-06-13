import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

 const Gulshan = () => {
    return (
        <div>

            <div className='grid grid-cols-4 gap-5 items-center justify-items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                <Link href="https://shorturl.at/7ntAd">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/1.png" alt='1' width={200} height={200}></Image>
                        <h1>Chips dips</h1>
                        <h1>Timings:3 pm-12 am</h1>
                    </div>
                </Link>

                <Link href="rb.gy/62zr66">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/2.png" alt='2' width={200} height={200}></Image>
                        <h1>Dehli Darbar Kabab House</h1>
                        <h1>Timings:11 am–12 am</h1>
                    </div>
                </Link>

                <Link href="rb.gy/b2nt7j">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/3.png" alt='3' width={200} height={200}></Image>
                        <h1>Delfrio</h1>
                        <h1>Timings:8 am–1 am</h1>
                    </div>
                </Link>

                <Link href="https://shorturl.at/4ZQ0x">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/4.png" alt='4' width={200} height={200}></Image>
                        <h1>Ginsoy-Gulshan Branch</h1>
                        <h1>Timings:12:30 pm–12 am</h1>
                    </div>
                </Link>

                <Link href="https://shorturl.at/Rtbjk">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/5.png" alt='5' width={200} height={200}></Image>
                        <h1>Gulshan Broast</h1>
                        <h1>Timings:12 pm–2 am</h1>
                    </div>
                </Link>


                <Link href="https://shorturl.at/gryho">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/6.png" alt='6' width={200} height={200}></Image>
                        <h1>Hot and Chilli roll Gulshan Iqbal</h1>
                        <h1>Timings:2 pm-2 am</h1>
                    </div>
                </Link>

                <Link href="https://shorturl.at/vpIDR">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/7.png" alt='7' width={200} height={200}></Image>
                        <h1>K Grill n Roll (Gulshan)</h1>
                        <h1>Timings:12 pm–12 am</h1>
                    </div>
                </Link>

                <Link href="https://shorturl.at/LXidj">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/8.png" alt='8' width={200} height={200}></Image>
                        <h1>Karachi Broast-Gulshan-e-Iqbal</h1>
                        <h1>Timings:12 pm–2 am</h1>
                    </div>
                </Link>

                <Link href="rb.gy/ncdvn4">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/9.png" alt='9' width={200} height={200}></Image>
                        <h1>Royal Taj Restaurant</h1>
                        <h1>Timings:12 pm-12 am</h1>
                    </div>
                </Link>

                <Link href="rb.gy/hx0h9u">
                    <div className='bg-black text-cyan-400 rounded-lg px-5 py-3 hover:bg-slate-800 hover:shadow-black hover:shadow-2xl text-center '>
                        <Image src="/10.png" alt='10' width={200} height={200}></Image>
                        <h1>Wok's</h1>
                        <h1>Timings:1 pm–12 am</h1>
                    </div>
                </Link>
            </div>




        </div>



    )
}
export default Gulshan
