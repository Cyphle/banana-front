import { Outlet } from 'react-router-dom';
import { Header } from './shared/header/Header.tsx';
import { ConfigProvider } from 'antd';
import './main.scss'
import { PRIMARY_COLOR } from './theme-variables.ts';
import { Footer } from './shared/footer/Footer.tsx';
import { UserContextProvider } from './contexts/user/user.context.tsx';
import { useUserInfo } from './stores/user/user.queries.ts';
import { UserInfo } from './stores/user/user.types.ts';
import { Option, some } from './helpers/option.ts';

export async function appLoader() {
  return {};
}

const SiteContent = ({ userInfo }: { userInfo: Option<UserInfo> }) => {
  return (
    <UserContextProvider>
      <ConfigProvider theme={ { token: { colorPrimary: PRIMARY_COLOR } } }>
          <Header userInfo={userInfo}/>

          <Outlet/>

          <Footer/>
        </ConfigProvider>
    </UserContextProvider>
  )
}

function Main() {
  // const { isPending, isError, data, error } = useUserInfo();
  const data = some({
    username: '',
    firstName: '',
    lastName: '',
    email: ''
  });

  // TODO faut remettre comme avant
  return (
    <>
      {/* {isPending ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error: { error.message }</span>
      ) : (
        <SiteContent userInfo={data as Option<UserInfo>}/>
      )} */}
      <SiteContent userInfo={data as Option<UserInfo>}/>
    </>
  )
}

export default Main
