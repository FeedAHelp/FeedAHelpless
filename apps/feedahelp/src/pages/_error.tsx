import ServerError from '../components/ui/features/errors/ServerError'
import Forbidden from '../components/ui/features/errors/Forbidden'
import Unauthorized from '../components/ui/features/errors/Unauthorized'
import ServiceUnavailable from '../components/ui/features/errors/ServiceUnavailable'

type ErrorWithStatusCode = {
    statusCode: 403 | 401;
    estimatedTime?: number;
};
  
type ErrorWithStatusCodeAndTime = {
    statusCode: 503;
    estimatedTime: number;
};
  
type ErrorProps = ErrorWithStatusCode | ErrorWithStatusCodeAndTime 

const Error = ({ statusCode,estimatedTime }:ErrorProps) => {
    const time=estimatedTime?estimatedTime:0
  return (
    statusCode? <RenderPages statusCode={statusCode} estimatedTime={time}/> : <ServerError/>
  );
};
export default Error;


const RenderPages=({statusCode,estimatedTime}:{statusCode:number,estimatedTime:number})=>{

    if(statusCode===401) return <Unauthorized/>

    if(statusCode===403) return <Forbidden/>

    if(statusCode===503) return <ServiceUnavailable estimatedTime={estimatedTime}/>

    return <ServerError/>
}
