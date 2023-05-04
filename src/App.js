import './App.css';
import Navbar from './components/navbar/Navbar'; // I THINK THIS IS BUG (NOT ERROR)
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages.jsx';
import Message from './pages/message/Message.jsx';
import MyGigs from './pages/myGigs/myGigs';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/myGigs',
          element: <MyGigs />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
      ],
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
