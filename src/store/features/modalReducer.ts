import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AddBookForm from '@/components/forms/AddBookForm'
import EditBookForm from '@/components/forms/EditBookForm'

type KnownContent = 'add' | 'edit'

export const contentHash: Record<KnownContent, () => React.JSX.Element> = {
  add: AddBookForm,
  edit: EditBookForm,
}

type ContentHashKey = keyof typeof contentHash

interface AppState {
  open: boolean
  content: ContentHashKey
}

const initialState: AppState = {
  open: false,
  content: 'add',
}

const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open
    },
    changeContent: (state, action: PayloadAction<ContentHashKey>) => {
      state.content = action.payload
      state.open = true
    },
  },
})
export default modalReducer.reducer
export const { toggle, changeContent } = modalReducer.actions
