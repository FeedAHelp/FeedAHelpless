import React, { useEffect, useState } from 'react'
import { Styled } from './GenericLikeButton.styled'
import useLikeButtonAnimation from './useLikeButtonAnimation'
import Like from './svg/Like'
import Star from './svg/star'

type GenericLikeButtonProps = {
  children: React.ReactNode
}
export const GenericLikeButton = ({ children }: GenericLikeButtonProps) => {
  const { isActive, handleClick } = useLikeButtonAnimation()

  return (
    <Styled.LikeButton>
      <a href='#' className={`like-button ${isActive ? 'active' : ''} animated relative`} onClick={handleClick}>
        <Star />
        <div className=' z-20 h-5 w-5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Like />
        </div>
      </a>
    </Styled.LikeButton>
  )
}
