import { createAction, createSlice } from '@reduxjs/toolkit'
import { initialBookSliceState } from '@/lib/constants'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Book } from '@/lib/definitions'

interface AppState {
  books: Array<Book>
  bookToEdit: Book | null
}

const initialState: AppState = {
  books: initialBookSliceState,
  bookToEdit: null,
}

export const setBookEdit = createAction<Book | null>('book/setBookEdit') //

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const newBook = action.payload
      state.books.push(newBook)
    },
    removeBook: (state, action: PayloadAction<string>) => {
      const bookNameToRemove = action.payload
      state.books = state.books.filter((book) => book.name !== bookNameToRemove)
    },
    editBook: (state, action: PayloadAction<Book>) => {
      const updatedBook = action.payload
      const index = state.books.findIndex(
        (book) => book.name === updatedBook.name
      )
      if (index !== -1) {
        state.books[index] = updatedBook
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setBookEdit, (state, action) => {
      state.bookToEdit = action.payload
    })
  },
})

export default bookSlice.reducer
export const { addBook, removeBook, editBook } = bookSlice.actions
