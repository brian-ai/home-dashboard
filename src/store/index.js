import createContext from './createContext'

const initialState = {
  config: {
    name: 'wwcoffee',
    nav: [
      {
        value: 'providers',
        text: 'Providers',
        path: '/providers'
      },
      {
        value: 'settings',
        text: 'Settings',
        path: '/settings'
      }
    ],
    activeItem: undefined
  }
}

export { createContext, initialState }
