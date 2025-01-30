import { Outlet, useLocation } from 'react-router'
import { cnMixScrollBar } from '@consta/uikit/MixScrollBar'
import cn from 'classnames'

import { Header } from '@widgets/header'

const scrollBarStyles = cnMixScrollBar()

export const Layout = () => {
  return (
    <div className="appContainer">
      <Header />
      <main className={cn('mainContent', scrollBarStyles)}>
        <div className={'page'}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
