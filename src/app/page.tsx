'use client'
import React from 'react'
import { useAppSelector } from '@/store/hooks'
import Book from '@/components/Book'

export default function Home() {
  const books = useAppSelector((state) => state.bookReducer.books)
  return (
    <div className="grid px-2 sm:px-0 sm:grid-cols-3 gap-8 justify-items-center min-h-[calc(100vh-64px)] py-14 sm:w-9/12 sm:mx-auto">
      {books.map(({ category, description, name, price }, index) => (
        <Book
          category={category}
          description={description}
          key={index}
          name={name}
          price={price}
        />
      ))}
    </div>
  )
}
