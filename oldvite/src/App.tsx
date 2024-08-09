import './App.scss'
import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/header/Header.tsx';

export async function appLoader() {
  return { };
}

function App() {
  return (
    <>
      <Header />

      <Outlet/>
    </>
  )
}

export default App
