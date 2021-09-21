import React from 'react'
import MainTemplate from '@components/Template/MainTemplate'
import useModal from '@utils/hooks/useModal'
import ModalOverlay from '@components/modal/ModalOverlay'

function App() {
  const modal = useModal(false)
  return (
    <>
      <MainTemplate>
        <span className='text-[10rem]'>hello Reshub</span>
        <button
          className='w-[3rem] h-[3rem] text-[2.4rem]'
          onClick={modal.openModal}
        >
          modal
        </button>
        <ModalOverlay open={modal.open}>
          <div className='w-[25rem] h-25rem] bg-secondary-light'>
            <span className='text-black text-[10rem]'>hello</span>
            <button className='text-[2.4rem]' onClick={modal.closeModal}>
              close
            </button>
          </div>
        </ModalOverlay>
      </MainTemplate>
    </>
  )
}

export default App
