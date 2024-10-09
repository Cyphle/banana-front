import { Outlet } from 'react-router-dom';
import { Header } from './shared/header/Header.tsx';
import { ConfigProvider } from 'antd';
import './main.scss'
import { PRIMARY_COLOR } from './theme-variables.ts';
import { Footer } from './shared/footer/Footer.tsx';

export async function appLoader() {
  return {};
}

function Main() {
  return (
    <>
      <ConfigProvider theme={ { token: { colorPrimary: PRIMARY_COLOR } } }>
        <Header/>

        <Outlet/>

        <Footer />
      </ConfigProvider>
    </>
  )
}

export default Main
