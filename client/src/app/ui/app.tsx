import { RouterProvider } from 'react-router'
import { presetGpnDefault, Theme } from '@consta/uikit/Theme'

import { router } from '../router'

import '../styles/reset.css'
import '../styles/global.css'

export const App = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <RouterProvider router={router} />
    </Theme>
  )
}
