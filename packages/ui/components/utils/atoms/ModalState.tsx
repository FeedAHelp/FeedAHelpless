import { atom } from 'recoil'

export const modalRecoilState = atom({
  key: 'modalState',
  default: {
    open: false,
    modalComponent: <></>
  }
})
