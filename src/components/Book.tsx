'use client'
import React from 'react'
import { Book } from '@/lib/definitions'
import { removeBook, setBookEdit } from '@/store/features/bookSlice'
import { useAppDispatch } from '@/store/hooks'
import { changeContent } from '@/store/features/modalReducer'
const BookCard = ({ category, description, name, price }: Book) => {
  const dispatch = useAppDispatch()
  return (
    <div className="card w-96 bg-base-100 shadow-xl w-full">
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>{description}</p>
        <p>price: {price}</p>
        <div className="card-actions justify-start">
          <button
            className="btn btn-secondary hover:btn-active"
            onClick={() => {
              dispatch(setBookEdit({ category, description, name, price }))
              dispatch(changeContent('edit'))
            }}
          >
            Edit Book
          </button>
          <button
            className="btn btn-accent hover:btn-active"
            onClick={() => dispatch(removeBook(name))}
          >
            Delete Book
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
