import { Styled } from './AddToCart.styled'
import Image from 'next/image'
import { Icon } from '../../elements/Icon'

type Props = {
  image: string
  name?: string
  price: string
  prodRefId: string
  top: number
  left: number
  handleAddItemClick: (id: string) => void
}

export const AddToCart = ({
  name,
  image,
  price = '50',
  prodRefId = 'Id',
  top = 0,
  left = 0,
  handleAddItemClick
}: Props) => {
  return (
    <>
      <Styled.Button
        onClick={(e) => {
          e.preventDefault()
          handleAddItemClick(prodRefId)
        }}
        style={{ top: top, left: left }}
      >
        <Styled.Price>
          <div className='flex flex-row items-center justify-center'>
            <Image
              src='/assets/TakaSymbol.svg'
              width={10}
              height={10}
              style={{ width: '0.75rem', height: '0.75rem' }}
              alt='Taka Symbol'
            />
            <span className='p-1 '>{price}</span>
          </div>
        </Styled.Price>
        <Styled.ShoppingCart>
          <Icon title='add to cart' name='bagEmpty' size='small' />
        </Styled.ShoppingCart>
        <Styled.Buy>Add to cart</Styled.Buy>
      </Styled.Button>
    </>
  )
}
