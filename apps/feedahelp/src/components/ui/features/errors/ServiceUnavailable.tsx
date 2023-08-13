import React from 'react'
import Countdown from 'react-countdown';

const ServiceUnavailable = ({estimatedTime}:{estimatedTime:number}) => {

    const Completions = () => <span>You are good to go!</span>;

    const renderer = ({ days ,hours, minutes, seconds, completed }:any) => {
        // Render a completed state
        if (completed) return <Completions />;

          // Render a countdown
          return <span>{days}:{hours}:{minutes}:{seconds}</span>;
        
      };

  return (
    <>
    <div>ServiceUnavailable503</div>
    <Countdown date={Date.now() + estimatedTime} renderer={renderer}/>
    </>
  )
}

export default ServiceUnavailable
