import './main.css';
import { Outlet } from 'react-router-dom';
import { Header } from './shared/header/Header.tsx';
import { ConfigProvider } from 'antd';

export async function appLoader() {
  return {};
}

function Main() {
  return (
    <>
      <ConfigProvider theme={ { token: { colorPrimary: '#031359' } } }>
        <Header/>

        <Outlet/>
      </ConfigProvider>
    </>
  )
}

export default Main
