import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from './fonts'
import theme from '../theme.js'
export default function App({ Component, pageProps }) {
 
  return  (<ChakraProvider theme={theme}>
    <Component {...pageProps} /></ChakraProvider>)
}
