import React from 'react';
import './main.css';
import { Outlet } from 'react-router-dom';
import { Header } from './shared/header/Header.tsx';

export async function appLoader() {
  return { };
}

function Main() {
  return (
    <>
      <Header />

      <Outlet/>
    </>
  )
}

export default Main
