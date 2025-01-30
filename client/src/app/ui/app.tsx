import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { presetGpnDefault, Theme } from '@consta/uikit/Theme'

import { router } from '../router'
import { appStore } from '../store'

import '../styles/reset.css'
import '../styles/global.css'

export const App = () => {
  return (
    <ReduxProvider store={appStore}>
      <Theme preset={presetGpnDefault}>
        <RouterProvider router={router} />
      </Theme>
    </ReduxProvider>
  )
}
