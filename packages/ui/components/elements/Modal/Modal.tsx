import { motion } from 'framer-motion'
import Backdrop from './BackDrop'
import { modalRecoilState } from '../../utils/atoms/ModalState'
import { useRecoilState } from 'recoil'
import { Styled } from './ModalCloseButton.styled'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

export const Modal = () => {
  const [modalState, setModalState] = useRecoilState(modalRecoilState)

  return (
    <>
      {modalState.open && (
        <Backdrop
          onClicked={() => {
            setModalState({
              open: false,
              modalComponent: <></>
            })
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className='relative z-20 rounded-2xl flex flex-col items-center justify-center'
            style={{
              zIndex: 1
            }}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <button
              className='absolute top-2 right-3 z-50'
              onClick={() => {
                setModalState({
                  open: false,
                  modalComponent: <></>
                })
              }}
            >
              <Styled.CloseButton />
            </button>
            {modalState.modalComponent}
          </motion.div>
        </Backdrop>
      )}
    </>
  )
}
