import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import "./i18n";
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
    },
    {
        path: 'login',
        element: <div>Login</div>,
    },
    {
      path: 'register',
      element: <div>Register</div>,
    },
    {
      path: 'dashboard',
      element: <div>Dashboard</div>
    },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <NextUIProvider>
                <RouterProvider router={router}>
                </RouterProvider>
            </NextUIProvider>
    </React.StrictMode>
)

