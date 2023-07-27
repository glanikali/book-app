'use client'
import { store } from '../store'
import { Provider } from 'react-redux'
import React from 'react'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

export default AppProvider
