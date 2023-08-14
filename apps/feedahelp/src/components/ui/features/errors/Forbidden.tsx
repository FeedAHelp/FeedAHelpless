import Image from "next/image"
import Link from "next/link"

const Forbidden = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center text-center flex-col'>
        <h1 className='text-5xl text-slate-600 md:text-7xl duration-500'>No permission</h1>

        <p className='text-sm md:text-2xl text-slate-600'>The page you are trying access has restricted access.<br/>Please Login First.</p>

        <Image src={'/errors/forbidden.gif'} height={500} width={500} alt='notFound-gif'/>

        <Link href='/' className='p-3 bg-[#ed500d51] rounded-md mt-2 text-xl text-slate-600 hover:shadow-lg duration-500'>Back to Home Page</Link>
    </div>
  )
}
export default Forbidden
