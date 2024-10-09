import { Outlet } from 'react-router-dom';
import { Header } from './shared/header/Header.tsx';
import { ConfigProvider } from 'antd';
import './main.scss'
import { PRIMARY_COLOR } from './theme-variables.ts';

export async function appLoader() {
  return {};
}

function Main() {
  return (
    <>
      <ConfigProvider theme={ { token: { colorPrimary: PRIMARY_COLOR } } }>
        <Header/>

        <Outlet/>
      </ConfigProvider>
    </>
  )
}

export default Main
