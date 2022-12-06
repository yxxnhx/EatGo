import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Global } from '@emotion/react';
import HomePage from './Features/Home/HomePage';
import AboutPage from './Features/About/AboutPage';
import LoginPage from './Features/Login/LoginPage';
import RestaurantsPage from './Features/Restaurants/RestaurantsPage';
import RestaurantPage from './Features/Restaurant/RestaurantPage';
import NotFoundPage from './Features/Not-found/NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';
import Header from './Components/Header';
import reset from './styles/reset';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <Global styles={reset} />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
