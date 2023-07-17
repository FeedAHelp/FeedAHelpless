import React, { useState, useEffect } from 'react'

const useLikeButtonAnimation = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault()
    setIsActive(!isActive)
    generateClones(e.target as HTMLButtonElement)
  }

  const generateClones = (button: HTMLButtonElement): void => {
    let clones: number = randomInt(2, 4)
    const svgElement = button.querySelector('svg')
    if (!svgElement) {
      return
    }

    for (let it = 1; it <= clones; it++) {
      let clone = svgElement.cloneNode(true) as SVGElement,
        size: number = randomInt(5, 16)
      button.appendChild(clone)
      clone.setAttribute('width', size.toString())
      clone.setAttribute('height', size.toString())
      clone.style.position = 'absolute'
      clone.style.transition = 'transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s'
      let animTimeout = setTimeout(() => {
        clearTimeout(animTimeout)
        clone.style.transform =
          'translate3d(' + plusOrMinus() * randomInt(20, 25) + 'px,' + plusOrMinus() * randomInt(10, 25) + 'px,0)'
        clone.style.opacity = '0'
      }, 1)
      let removeNodeTimeout = setTimeout(() => {
        clone.parentNode!.removeChild(clone)
        clearTimeout(removeNodeTimeout)
      }, 900)
      let removeClassTimeout = setTimeout(() => {
        setIsActive(false)
      }, 600)
    }
  }

  const plusOrMinus = (): number => {
    return Math.random() < 0.5 ? -1 : 1
  }

  const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 0.5) + min)
  }
  useEffect(() => {
    let button = document.querySelector('.like-button')

    button.addEventListener('click', function (e) {
      e.preventDefault()
      this.classList.toggle('active')
      this.classList.add('animated')
      generateClones(this)
    })
  })
  return { isActive, handleClick }
}

export default useLikeButtonAnimation
