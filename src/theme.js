import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    colors: {
        black: "#333",
        brand: {
            primary: '#86C3B4',
            secondary: '#49A596',
            CaliforniaDark: '#49A596',
            CaliforniaLight: '#86C3B4',
            CaliforniaSage: '#C8DCC3',
            CaliforniaSand: '#F0E1C5',
            CaliforniaBlue: '#BAD2DD'
        }
    },
})

export default theme