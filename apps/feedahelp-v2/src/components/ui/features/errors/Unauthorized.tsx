import Image from "next/image"
import Link from "next/link"

const Unauthorized = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center text-center flex-col'>
        <h1 className='text-3xl text-slate-600 md:text-6xl duration-500'>401-Unauthorized</h1>

        <p className='text-xs md:text-2xl text-slate-600'>Access is allowed only for register users</p>

        <Image src='/errors/unauthorized.gif' height={500} width={500} alt='notFound-gif'/>

        <Link href='/' className='p-3 bg-[#ed500d51] rounded-md mt-2 text-xl text-slate-600 hover:shadow-lg duration-500'>Back to Login Page</Link>
    </div>
  )
}

export default Unauthorized
