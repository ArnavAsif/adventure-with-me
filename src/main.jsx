import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import UserProfile from './components/UserProfile.jsx';
import PrivateRoutes from './privateRoutes/PrivateRoutes.jsx';
import UpdateProfile from './components/UpdateProfile.jsx';
const HomePage = lazy(()=> import('./components/HomePage.jsx'));
const ExploreMore = lazy(()=> import('./components/ExploreMore.jsx'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/userProfile',
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
      },
      {
        path: '/explore/:id',
        element: <PrivateRoutes><ExploreMore></ExploreMore></PrivateRoutes>,
        loader: ()=> fetch('./adventureData.json')
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<div>Loading app...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
