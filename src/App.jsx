import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loyout from './companents/Loyout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import PraductsPage from './pages/PraductsPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryClent = new QueryClient()
  return (


    <>
    <QueryClientProvider client={queryClent}>
        <BrowserRouter>
          <Routes>
            <Route element={<Loyout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='category' element={<CategoryPage />} />
              <Route path='cart' element={<CartPage />} />
              <Route path='products/:id' element={<PraductsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App