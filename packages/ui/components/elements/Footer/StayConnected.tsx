import { Styled } from './StayConnected.style'

const StayConnected = () => {
  return (
    <>
      <Styled.StayConnected className='lg:pr-32'>
        <h5> Stay Connected</h5>
        <p className='text-sm md:h-14'>sub heading</p>
        <Styled.SubscribeButton>
          <input id='email' type='email' placeholder={`Enter your Email`} />
          <button>submit</button>
        </Styled.SubscribeButton>
      </Styled.StayConnected>
    </>
  )
}

export default StayConnected
