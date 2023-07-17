import { motion } from 'framer-motion'

const Backdrop = ({ onClicked, children }: any) => {
  return (
    <motion.div
      onClick={() => {
        onClicked()
      }}
      className='fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
