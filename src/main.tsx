import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './embla.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { NextUIProvider } from '@nextui-org/react'
import { LanguageProvider } from './context/LanguageProvider'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
