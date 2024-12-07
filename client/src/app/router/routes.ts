import { RouteObject } from 'react-router'

import { PATHS } from '@shared/constants'

export const routes: RouteObject[] = [
  {
    path: PATHS.main,
    children: [
      {
        index: true,
        element: '123',
      },
    ],
  },
]
