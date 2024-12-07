import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { apiSlice } from '@shared/api'

import { rootReducer } from './rootReducer'

function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([apiSlice.middleware]),
  })

  setupListeners(store.dispatch)

  return store
}

export const appStore = createStore()

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
