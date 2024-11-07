import { formOptions, useForm } from '@tanstack/react-form';
import { Button, Form, Input } from 'antd';
import { useLocation, useNavigate } from 'react-router';
import { AuthenticatedUser } from '../../contexts/user/user.types.ts';
import { useLogin } from '../../stores/login/login.commands.ts';
import { LoginRequest } from '../../stores/login/login.types.ts';
import { useUser } from '../../contexts/user/user.context.tsx';
import { useEffect, useState } from 'react';
import { authenticate } from '../../services/user.service.ts';
import { isNotNullNorUndefined } from '../../helpers/utils.ts';

// TODO original
// export const Login = () => {
//   const navigate = useNavigate();
//   const { setUserState } = useUser();

//   const onLoginError = (_: string) => {
//     console.error('Error while logging');
//   };

//   const onLoginSuccess = (user: AuthenticatedUser) => {
//     setUserState(user);
//     navigate(`/`);
//   };

//   const {
//     mutate: loginMutation,
//     isPending: loginIsPending,
//   } = useLogin(onLoginError, onLoginSuccess);

//   const options = formOptions<LoginRequest>({
//     defaultValues: {
//       username: '',
//       password: 'passpass'
//     },
//   });

//   const form = useForm({
//     ...options,
//     onSubmit: async ({ value }) => {
//       loginMutation({
//         username: value.username,
//         password: value.password,
//       });
//     },
//   });

//   return (
//     <div className="login-page">
//       <h1>Connecte toi</h1>

//       <Form
//         labelCol={ { span: 8 } }
//         wrapperCol={ { span: 16 } }
//         style={ { maxWidth: 600 } }
//         onFinish={ () => {
//           form.handleSubmit();
//         } }
//       >
//         <form.Field
//           name="username"
//           children={ (field) => (
//             <>
//               <label htmlFor={ field.name }>Nom d'utilisateur :</label>
//               <Input
//                 data-testid="username-input"
//                 value={ field.state.value }
//                 onBlur={ field.handleBlur }
//                 onChange={ (e: any) => field.handleChange(e.target.value) }
//                 disabled={ loginIsPending }
//                 placeholder="Nom d'utilisateur"/>
//             </>
//           ) }
//         />

//         <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
//           <Button type="primary" htmlType="submit">
//             Connexion
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }

// TODO oidc example

const readQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
}


export const Login = () => {
  const queryParams = readQuery();
  const navigate = useNavigate();

  console.log('query', queryParams);
  // TODO si code && session_state && iss ne sont pas null alors il faut faire un get sur http://localhost:8080/authenticate avec ces paramètres

  // Redirect to login on button click
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/login";
  };

  useEffect(() => {
    const code = queryParams.get('code');
    const sessionState = queryParams.get('session_state');
    const iss = queryParams.get('iss');
    if (isNotNullNorUndefined(code) && isNotNullNorUndefined(sessionState) && isNotNullNorUndefined(iss)) {
      authenticate(code, sessionState, iss)
      .then(() => {
        navigate('/');
      });
    }
  }, [queryParams]);

  // TODO ça faut une url /user/info
  // Fetch user info from backend if already authenticated.
  // TODO c'est peut être pas nécessaire ce truc ou alors faut plutôt regarder ce qu'on a dans le context user.
  // useEffect(() => {
  //   // fetch("http://localhost:8080/auth/callback", {
  //   fetch("http://localhost:8080/authenticate", {
  //     credentials: "include",
  //   })
  //     .then(response => response.json())
  //     .then(data => setUserInfo(data))
  //     .catch(error => console.error("Error fetching user info:", error));
  // }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login with Keycloak</button>
    </div>
  );
}