import { Home, Providers, Settings } from 'pages'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/providers',
    exact: true,
    component: Providers
  },
  {
    path: '/settings',
    exact: true,
    component: Settings
  }
]

export default routes
