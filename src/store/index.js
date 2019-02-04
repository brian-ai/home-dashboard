import createContext from './createContext'

const initialState = {
    config: {
        name: 'wwcoffee',
        nav: [
            {
                text: 'Sobre nós',
                path: '/about'
            },
            {
                text: 'Sugira cafeterias',
                path: '/suggest'
            },
        ],
        activeItem: undefined,
    },
}

export {
    createContext,
    initialState
}