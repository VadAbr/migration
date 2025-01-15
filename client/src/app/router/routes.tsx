import { RouteObject } from 'react-router'

import { PATHS } from '@shared/constants'
import { MainPage } from '@pages/main'
import { Layout } from './layout.tsx'
import { AboutRussia1Page } from '@pages/aboutRussia1'
import { AboutRussia2Page } from '@pages/aboutRussia2'
import { AboutRussia3Page } from '@pages/aboutRussia3'
import { AboutRussia4Page } from '@pages/aboutRussia4'
import { AboutRussia5Page } from '@pages/aboutRussia5'
import { AboutRussia6Page } from '@pages/aboutRussia6'
import { NotFoundPage } from '@pages/notFound'
import { Laws1Page } from '@pages/laws1'
import { Laws2Page } from '@pages/laws2'
import { Laws3Page } from '@pages/laws3'
import { Laws4Page } from '@pages/laws4'
import { Laws5Page } from '@pages/laws5'
import { Job1Page } from '@pages/job1'
import { Job2Page } from '@pages/job2'
import {House1Page} from "@pages/house1";
import {House2Page} from "@pages/house2";

export const routes: RouteObject[] = [
  {
    path: PATHS.main,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        element: <AboutRussia1Page />,
        path: PATHS.aboutRussia1,
      },
      {
        element: <AboutRussia2Page />,
        path: PATHS.aboutRussia2,
      },
      {
        element: <AboutRussia3Page />,
        path: PATHS.aboutRussia3,
      },
      {
        element: <AboutRussia4Page />,
        path: PATHS.aboutRussia4,
      },
      {
        element: <AboutRussia5Page />,
        path: PATHS.aboutRussia5,
      },
      {
        element: <AboutRussia6Page />,
        path: PATHS.aboutRussia6,
      },
      {
        element: <Laws1Page />,
        path: PATHS.laws1,
      },
      {
        element: <Laws2Page />,
        path: PATHS.laws2,
      },
      {
        element: <Laws3Page />,
        path: PATHS.laws3,
      },
      {
        element: <Laws4Page />,
        path: PATHS.laws4,
      },
      {
        element: <Laws5Page />,
        path: PATHS.laws5,
      },
      {
        element: <Job1Page />,
        path: PATHS.job1,
      },
      {
        element: <Job2Page />,
        path: PATHS.job2,
      },
      {
        element: <House1Page />,
        path: PATHS.house1,
      },
      {
        element: <House2Page />,
        path: PATHS.house2,
      },
    ],
  },
  {
    path: PATHS.other,
    element: <Layout />,
    children: [
      {
        path: PATHS.other,
        element: <NotFoundPage />,
      },
    ],
  },
]
