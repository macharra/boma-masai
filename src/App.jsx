// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import ErrorPage from './pages/ErrorPage';

import './index.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Book from './pages/Book';
import VipRoom from './pages/VIPRoom';
import RegularRoom from './pages/RegularRoom';
import StandardRoom from './pages/StandardRoom';
import ExecutiveRoom from './pages/ExecutiveRoom';
import OurRooms from './pages/OurRooms'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><ScrollToTop /><Home /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about-us',
    element: <><ScrollToTop /><AboutUs /></>,
  },
  {
    path: '/contact-us',
    element: <><ScrollToTop /><ContactUs /></>,
  },
  {
    path: '/standard-room',
    element: <><ScrollToTop /><StandardRoom /></>,
  },
  {
    path: '/executive-room',
    element: <><ScrollToTop /><ExecutiveRoom /></>,
  },
  {
    path: '/bookings',
    element: <><ScrollToTop /><Book /></>,
  },
  {
    path: '/vip-room',
    element: <><ScrollToTop /><VipRoom /></>,
  },
  {
    path: '/regular-room',
    element: <><ScrollToTop /><RegularRoom /></>,
  },
  {
    path: '/our-rooms',
    element: <><ScrollToTop /><OurRooms /></>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
