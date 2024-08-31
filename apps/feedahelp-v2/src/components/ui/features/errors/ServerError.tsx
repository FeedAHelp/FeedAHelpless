import Image from "next/image"
import Link from "next/link"

const ServerError = () => {

    const tryAgainHandle=()=>{
        window.location.reload()
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center text-center flex-col'>
        <h1 className='text-3xl text-slate-600 md:text-6xl duration-500'>500 Internal Server Error</h1>

        <p className='text-xs md:text-2xl text-slate-600 mb-10'>There was an error, please try again later.</p>

        <Image src={'/errors/serverError.gif'} height={500} width={500} alt='notFound-gif'/>
        
        <div className="flex justify-between w-80 mt-10">

        <Link href='/' className='p-3 bg-[#ed500d51] rounded-md mt-2 text-xl text-slate-600 hover:shadow-lg duration-500'>Back to Login Page</Link>

        <button className='p-3 bg-[#ed500d51] rounded-md mt-2 text-xl text-slate-600 hover:shadow-lg duration-500' onClick={tryAgainHandle}>Try again</button>

        </div>

    </div>
  )
}

export default ServerError
