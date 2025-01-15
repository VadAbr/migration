import { Outlet } from 'react-router'
import { Header } from '@widgets/header'
import {cnMixScrollBar} from "@consta/uikit/MixScrollBar";
import cn from "classnames";


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