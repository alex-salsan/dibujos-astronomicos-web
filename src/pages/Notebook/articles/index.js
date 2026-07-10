import { lazy } from 'react'

export const articles = {
  m42: lazy(() => import('./M42')),
  m8: lazy(() => import('./M8')),
}