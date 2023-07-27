'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import { contentHash, toggle } from '@/store/features/modalReducer'
const Modal = () => {
  const { open, content } = useAppSelector((state) => state.modalReducer)
  const dispatch = useAppDispatch()
  if (!open || !content) {
    return null
  }
  const ContentComponent = contentHash[content]
  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
      <div
        className="fixed inset-0 z-20 overflow-y-auto"
        onClick={() => dispatch(toggle())}
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 z-30">
          <div
            className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <ContentComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
