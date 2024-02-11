import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './context/AuthContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from 'react-use-cart';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AuthContextProvider>
        <React.StrictMode>
            <BrowserRouter>
			<CartProvider>
                <App />
            </CartProvider>      
            </BrowserRouter>
        </React.StrictMode>
    </AuthContextProvider>
    </ChakraProvider>
)