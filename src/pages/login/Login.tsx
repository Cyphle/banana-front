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
import { getOne } from '../../helpers/http.ts';

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
  const queryParams: URLSearchParams = readQuery();
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/login";
  };

  // TODO en fait il faut virer ce bout de code et remettre une redirect uri parce qu'en fait on ne devrait pas avoir de page de login
  // Ou alors une page qui ne fait rien à part l'effect là
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

  // TODO clean
  useEffect(() => {
    getOne(`test`, (data: any) => data)
    .then((data) => {
      console.log('data', data);
    })
    .catch((err) => {
      console.log('err', err);
    });
  }, []);

  return (
    <div>
      <Button onClick={handleLogin} type="primary" htmlType="submit">
        Connexion
      </Button>
    </div>
  );
}