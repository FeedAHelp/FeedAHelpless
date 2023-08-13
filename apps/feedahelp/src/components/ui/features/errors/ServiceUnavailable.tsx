import Countdown from 'react-countdown';
import Image from 'next/image';

const ServiceUnavailable = ({estimatedTime}:{estimatedTime:number}) => {

    const Completions = () => <span>You are good to go!</span>;

    const renderer = ({ days ,hours, minutes, seconds, completed }:any) => {
        // Render a completed state
        if (completed) return <Completions />;

          // Render a countdown
        //   return <span>{days}:{hours}:{minutes}:{seconds}</span>;
        return <div className='flex w-full md:w-3/6 justify-around text-center'>
            <ShowTime title="Days" time={days}/>
            <ShowTime title="Hours" time={hours}/>
            <ShowTime title="Minutes" time={minutes}/>
            <ShowTime title="Seconds" time={seconds}/>
        </div>
        
      };

  return (
    <div className='h-screen w-screen flex justify-center items-center text-center flex-col'>

    <h1 className='text-2xl text-slate-600 md:text-6xl duration-500'>Service Temporarily Unavailable</h1>

    <p className='text-xs md:text-2xl text-slate-600 mb-10'>Our website is under construction. Please Stay with us!</p>

    <Image src='/errors/serviceUnavailable.gif' height={400} width={400} alt='notFound-gif'/>

    <p className='p-4 m-4 text-xl md:text-2xl text-slate-600 font-bold bg-[#47556936] rounded-lg mt-10'>COMING SOON</p>
    <Countdown date={Date.now() + estimatedTime} renderer={renderer}/>

    </div>
  )
}

export default ServiceUnavailable

const ShowTime =({title,time}:{title:string,time:number})=>{
    return(
        <div className='bg-[#f26f3717] p-2 rounded-md md:w-40 w-20 md:text-3xl shadow-lg'>
                <p className='text-[#475569]'>{title}</p>
                <p  className='text-[#4755699d]'>{time}</p>
        </div>
    )
}
