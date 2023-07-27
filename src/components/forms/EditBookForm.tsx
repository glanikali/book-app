import React, { useState } from 'react'
import { toggle } from '@/store/features/modalReducer'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { editBook } from '@/store/features/bookSlice'

const EditBookForm = () => {
  const bookToEdit = useAppSelector((state) => state.bookReducer.bookToEdit)
  const [name, setName] = useState(bookToEdit?.name)
  const [price, setPrice] = useState(bookToEdit?.price)
  const [category, setCategory] = useState(bookToEdit?.category)
  const [description, setDescription] = useState(bookToEdit?.description)

  const dispatch = useAppDispatch()

  if (!bookToEdit) {
    dispatch(toggle())
  }
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && price && category && description) {
      dispatch(editBook({ name, price, category, description }))
    }

    setName('')
    setPrice('')
    setCategory('')
    setDescription('')
    dispatch(toggle())
  }

  return (
    <form className="h-max p-4 grid gap-2 relative" onSubmit={handleFormSubmit}>
      <button
        className="btn btn-circle absolute right-2 top-1 scale-50"
        onClick={() => dispatch(toggle())}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Name:</span>
        </label>
        <input
          className="input input-bordered w-full"
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here"
          required
          type="text"
          value={name}
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Price:</span>
        </label>
        <input
          className="input input-bordered w-full "
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Type here"
          required
          type="text"
          value={price}
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Category:</span>
        </label>
        <input
          className="input input-bordered w-full "
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Type here"
          required
          type="text"
          value={category}
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Description:</span>
        </label>
        <textarea
          className="input input-bordered w-full "
          onChange={(e) => setDescription(e.target.value)}
          required
          value={description}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default EditBookForm
