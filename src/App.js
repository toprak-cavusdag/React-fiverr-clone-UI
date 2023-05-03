import './App.css';
import Navbar from './components/navbar/Navbar'; // I THINK THIS IS BUG (NOT ERROR)
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import myGigs from './pages/myGigs/myGigs.jsx';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages.jsx';
import Message from './pages/message/Message.jsx';

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
          path: '/gigs/:id',
          element: <Gig />,
        },

        {
          path: '/orders',
          element: <Orders />,
        },

        {
          path: '/my-gigs',
          element: <myGigs />,
        },

        {
          path: '/add',
          element: <Add />,
        },

        {
          path: '/Messages',
          element: <Messages />,
        },

        {
          path: '/message',
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
