import styled from '@emotion/styled'
import type { Meta } from '@storybook/react'
import Link from 'next/link'
import { motion, useElementScroll, useReducedMotion, useTransform, useViewportScroll } from 'framer-motion'
import { useRef, useState } from 'react'

import { Heading } from '../../elements/Heading'
import { Paragraph } from '../../elements/Paragraph'
import { useTheme } from '../theming'
import { animationTargets } from '.'

export default {
  title: 'Foundation/Animations',
  parameters: {
    docs: {
      description: {
        component: 'Animation examples'
      }
    },
    controls: { hideNoControlsWarning: true }
  }
} as Meta

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.medium_black};
  height: 20rem;
  overflow-x: hidden;
  overflow-y: scroll;
`

const StyledSpacer = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.medium_black};
  height: 25rem;
`

const StyledPageSpacer = styled.div`
  background: ${({ theme }) => theme.colors.neutrals.medium_black};
  height: 100vh;
`

/* In a styled component 'div' gets replaced with motion.div. */
const StyledBox = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primary.black};
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.blue};
  cursor: pointer;
`

export function GeneralInformation() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        General information about animations
      </Heading>
      <Paragraph variant='small'>
        The site uses the animation tool{' '}
        <Link href='https://www.framer.com/motion/' rel='noreferrer' target='_blank'>
          Framer Motion
        </Link>
        . (
        <Link href='https://www.framer.com/docs/' rel='noreferrer' target='_blank'>
          Docs
        </Link>
        )
      </Paragraph>
      <Paragraph variant='small'>
        When adding animations, try and make them short and smooth, so the interface will feel snappy.
      </Paragraph>
      <Paragraph variant='small'>
        Certain animation are being executed by the GPU of a device, which is preferred for better performance. These
        include: translate, scale, rotate, skew, and perspective. All other CSS properties are being executed by the CPU
        and can have more impact on performance, so the use needs to be limited and tested well.
      </Paragraph>
    </>
  )
}

export function Hover() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Hover animation
      </Heading>
      <StyledBox whileHover={{ scale: 1.25 }}>Hover me</StyledBox>
    </>
  )
}

const staggerList = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 }
}

export function Stagger() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Stagger animation
      </Heading>
      <Paragraph variant='small'>
        <Link href='https://www.framer.com/docs/animation/##orchestration' rel='noreferrer' target='_blank'>
          Docs
        </Link>
      </Paragraph>
      <Paragraph variant='small'>Hover over any of the items to reset.</Paragraph>
      <motion.ul animate='visible' initial='hidden' variants={staggerList} whileHover='hidden'>
        <motion.li variants={staggerItem}>
          <StyledBox>First</StyledBox>
        </motion.li>
        <motion.li variants={staggerItem}>
          <StyledBox>Second</StyledBox>
        </motion.li>
        <motion.li variants={staggerItem}>
          <StyledBox>Third</StyledBox>
        </motion.li>
      </motion.ul>
    </>
  )
}

export function KeyframesOnLoad() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Keyframes animation
      </Heading>
      <Paragraph variant='small'>
        <Link href='https://www.framer.com/docs/animation/##keyframes' rel='noreferrer' target='_blank'>
          Docs
        </Link>
      </Paragraph>
      <StyledBox
        animate={{
          x: [0, 100, 0, 0],
          y: [0, 0, 50, 0],
          scale: [1, 0.75, 1.25, 1]
        }}
        transition={{ duration: 2, times: [0, 0.2, 0.7, 1] }}
      >
        Look at me go
      </StyledBox>
    </>
  )
}

export function KeyframesOnHover() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Keyframes animation
      </Heading>
      <Paragraph variant='small'>
        <Link href='https://www.framer.com/docs/animation/##keyframes' rel='noreferrer' target='_blank'>
          Docs
        </Link>
      </Paragraph>
      <StyledBox
        transition={{ duration: 2, times: [0, 0.2, 0.7, 1] }}
        whileHover={{
          x: [0, 100, 0, 0],
          y: [0, 0, 50, 0],
          scale: [1, 0.75, 1.25, 1]
        }}
      >
        Hover me
      </StyledBox>
    </>
  )
}

export function UsingTransitions() {
  const theme = useTheme()
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Using transitions
      </Heading>
      <Paragraph variant='small'>
        <Link href='https://www.framer.com/docs/animation/##transitions' rel='noreferrer' target='_blank'>
          Docs
        </Link>
      </Paragraph>
      <Paragraph variant='small'>
        It is possible to connect the MUI transition settings to Framer Motion, but only for duration (transformed from
        milliseconds to seconds). Framer Motion has specific and limited easing options, which don&apos;t match with
        MUI.
      </Paragraph>
      <StyledBox
        initial={{ scale: 0.75 }}
        transition={{
          ease: 'easeOut',
          duration: theme.transitions.duration.shorter / 1000
        }}
        whileHover={{ scale: 1 }}
      >
        Hover me
      </StyledBox>
    </>
  )
}

export function Layout() {
  const theme = useTheme()
  const [justificationToEnd, setJustificationToEnd] = useState(false)

  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Layout animation
      </Heading>
      <Paragraph variant='small'>
        <Link href='https://www.framer.com/docs/animation/#layout-animations' rel='noreferrer' target='_blank'>
          Docs
        </Link>
      </Paragraph>
      <Paragraph variant='small'>
        Clicking on the box will change the flexbox justification from start to end and vice versa, and instead of
        jumping from one state to the other, the &quot;layout&quot; attribute of Framer Motion can easily and smoothly
        animate between those states using a transform. This also works for changing positioning for instance.
      </Paragraph>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: justificationToEnd ? 'end' : 'start',
          backgroundColor: theme.colors.neutrals.gray98,
          height: '20rem'
        }}
      >
        <StyledBox layout onClick={() => setJustificationToEnd((prev) => !prev)}>
          Click me to toggle
        </StyledBox>
      </div>
    </>
  )
}

export function ScrollIntoView() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Scroll into view animation
      </Heading>
      <StyledContainer>
        <StyledSpacer />
        <StyledBox initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }}>
          I&apos;m in view
        </StyledBox>
        <StyledSpacer />
      </StyledContainer>
    </>
  )
}

export function ScrollWithinElement() {
  const ref = useRef(null)
  const { scrollYProgress } = useElementScroll(ref)

  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Scroll within element animation
      </Heading>
      <StyledContainer ref={ref}>
        <StyledSpacer />
        <motion.div style={{ scaleX: scrollYProgress }}>
          <StyledBox>I change while scrolling</StyledBox>
        </motion.div>
        <StyledSpacer />
      </StyledContainer>
    </>
  )
}

export function ScrollWithinViewport() {
  const { scrollYProgress } = useViewportScroll()

  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Scroll with viewport animation
      </Heading>
      <StyledPageSpacer />
      <motion.div style={{ scaleX: scrollYProgress }}>
        <StyledBox>I change while scrolling</StyledBox>
      </motion.div>
      <StyledPageSpacer />
    </>
  )
}

export function ScrollWithinViewportTransformed() {
  const { scrollYProgress } = useViewportScroll()
  const xOffset = 100
  const scrollYProgressTransformedToXOffset = useTransform(scrollYProgress, [0, 1], [xOffset, -xOffset])
  const scrollYProgressTransformedToXOffsetReversed = useTransform(scrollYProgress, [0, 1], [-xOffset, xOffset])

  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Scroll with viewport animation
      </Heading>
      <StyledPageSpacer />
      <motion.div style={{ translateX: scrollYProgressTransformedToXOffset }}>
        <StyledBox>I move sideways while scrolling</StyledBox>
      </motion.div>
      <motion.div style={{ translateX: scrollYProgressTransformedToXOffsetReversed }}>
        <StyledBox>I move sideways while scrolling</StyledBox>
      </motion.div>
      <StyledPageSpacer />
    </>
  )
}

export function Drag() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Drag animation
      </Heading>
      <Paragraph variant='small'>
        <Link href='https://www.framer.com/docs/gestures/#drag' rel='noreferrer' target='_blank'>
          Docs
        </Link>
      </Paragraph>
      <StyledBox drag>Drag me</StyledBox>
    </>
  )
}

export function AnimationTargets() {
  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Animation via reusable pre-defined targets (aka variants in Framer Motion)
      </Heading>
      <Paragraph variant='small'>
        <Link href='https://www.framer.com/docs/animation/#variants' rel='noreferrer' target='_blank'>
          Docs
        </Link>
      </Paragraph>
      <Paragraph variant='small'>Hover over the box to reset.</Paragraph>
      <StyledBox
        animate={animationTargets.fadeIn}
        initial={animationTargets.fadeOut}
        variants={animationTargets}
        whileHover={animationTargets.fadeOut}
      >
        Look at me
      </StyledBox>
      <br />
      <Heading tag='h4' variant='h4BoldSerif'>
        All available animation targets:
      </Heading>
      <ul>
        {Object.entries(animationTargets).map(([targetKey, targetValue]) => (
          <li key={targetKey}>
            {targetKey} =&nbsp;
            {Object.entries(targetValue).map(([key, value]) => (
              <span key={key}>
                {key}: {value},&nbsp;
              </span>
            ))}
          </li>
        ))}
      </ul>
    </>
  )
}

export function Accessibility() {
  const shouldReduceMotion = useReducedMotion()

  const initial = shouldReduceMotion ? { opacity: 0 } : { x: -100 }
  const animate = shouldReduceMotion ? { opacity: 1 } : { x: 0 }

  return (
    <>
      <Heading tag='h3' variant='h3BoldSerif'>
        Accessibility and animations
      </Heading>
      <Paragraph variant='small'>
        Respect a users OS setting for reduced motion, and how to apply that with the &quot;useReducedMotion&quot; hook.
        <br />
        Current state of Reduced Motion set = {shouldReduceMotion ? shouldReduceMotion.toString() : 'false'}
      </Paragraph>
      <Paragraph variant='small'>
        <Link href='https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion'>
          How to change reduced motion in OS
        </Link>
        <br />
        <Link href='https://www.framer.com/docs/guide-accessibility/'>Docs</Link>
      </Paragraph>
      <Paragraph variant='small'>
        Hovering over the box below will show a transform by default, unless a user has set reduced motion, then it will
        show a fade instead.
      </Paragraph>
      <StyledBox initial={initial} whileHover={animate}>
        Hover me
      </StyledBox>
    </>
  )
}
