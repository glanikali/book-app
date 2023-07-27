'use client'
import React from 'react'
import { useAppDispatch } from '@/store/hooks'
import { changeContent } from '@/store/features/modalReducer'

const Nav = () => {
  const dispatch = useAppDispatch()
  return (
    <nav>
      <div className="navbar bg-base-100 justify-center">
        <button
          className="btn btn-primary normal-case text-xl hover:btn-active btn-block sm:btn-wide"
          onClick={() => dispatch(changeContent('add'))}
        >
          Add Book
        </button>
      </div>
    </nav>
  )
}

export default Nav
