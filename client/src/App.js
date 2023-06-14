import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

//import all components
import Username from './component/Username'
import Password from './component/Password'
import Register from './component/Register'
import PageNotFound from './component/PageNotFound'
import Profile from './component/Profile'
import Recovery from './component/Recovery'
import Reset from './component/Reset'



/**root routes*/
const router=createBrowserRouter([
    {
        path:'/',
        element:<Username/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/password',
        element:<Password/>
    },
    {
        path:'/profile',
        element:<Profile/>
    },
    {
        path:'/recovery',
        element:<Recovery/>
    },
    {
        path:'/reset',
        element:<Reset/>
    },
    {
        path:'*',
        element:<PageNotFound/>
    },
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </main>
  )
}

