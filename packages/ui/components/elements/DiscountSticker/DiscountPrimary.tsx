import Image from 'next/image'
import { DiscountStylePrimary } from './Discount.Style'

type Props = {
  title: string
  discount: number
}

const DiscountPrimary = ({ title, discount }: Props) => {
  return (
    <div className={'absolute right-2 top-2'}>
      <Image src='https://i.ibb.co/mccQHbw/discount1.png' width={70} height={70} alt={title} />
      <DiscountStylePrimary>
        <div className='ml-1 flex font-semibold leading-none'>
          <h3 className='-mt-[.20rem] text-[1.7rem]'>{discount}</h3>
          <p className='text-[0.60rem] leading-3'>
            {`%`}
            <br /> {`OFF`}
          </p>
        </div>
        <p className='-ml-3 mt-1 text-center text-[0.50rem] font-semibold leading-[0.5rem] text-red-600'>
          {`Discount`} <br /> {`Offer`}
        </p>
      </DiscountStylePrimary>
    </div>
  )
}

export default DiscountPrimary
