import { lazy } from 'react'

export const articles = {
  m42: lazy(() => import('./M42/M42')),
  m8: lazy(() => import('./M8/M8')),
  ngc869: lazy(() => import('./NGC869/NGC869')),
}