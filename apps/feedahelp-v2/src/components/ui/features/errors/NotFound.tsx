import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center text-center flex-col'>
        <h1 className='text-3xl text-slate-600 md:text-6xl duration-500'>Sorry, Page Not Found!</h1>

        <p className='text-xs md:text-2xl text-slate-600'>Sorry, we couldn’t find the page you’re looking for.<br/>Perhaps you’ve mistyped the URL? Be sure to check<br/>your spelling.</p>

        <Image src="/errors/notFound.gif" height={500} width={500} alt='notFound-gif'/>

        <Link href='/' className='p-3 bg-[#ed500d51] rounded-md mt-2 text-xl text-slate-600 hover:shadow-lg duration-500'>Back to Home Page</Link>
    </div>
  )
}
export default NotFound
