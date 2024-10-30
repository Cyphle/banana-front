import { formOptions, useForm } from '@tanstack/react-form';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import { AuthenticatedUser } from '../../contexts/user/user.types.ts';
import { useLogin } from '../../stores/login/login.commands.ts';
import { LoginRequest } from '../../stores/login/login.types.ts';
import { useUser } from '../../contexts/user/user.context.tsx';

export const Login = () => {
  const navigate = useNavigate();
  const { setUserState } = useUser();

  const onLoginError = (_: string) => {
    console.error('Error while logging');
  };

  const onLoginSuccess = (user: AuthenticatedUser) => {
    setUserState(user);
    navigate(`/`);
  };

  const {
    mutate: loginMutation,
    isPending: loginIsPending,
  } = useLogin(onLoginError, onLoginSuccess);

  const options = formOptions<LoginRequest>({
    defaultValues: {
      username: '',
      password: 'passpass'
    },
  });

  const form = useForm({
    ...options,
    onSubmit: async ({ value }) => {
      loginMutation({
        username: value.username,
        password: value.password,
      });
    },
  });

  return (
    <div className="login-page">
      <h1>Connecte toi</h1>

      <Form
        labelCol={ { span: 8 } }
        wrapperCol={ { span: 16 } }
        style={ { maxWidth: 600 } }
        onFinish={ () => {
          form.handleSubmit();
        } }
      >
        <form.Field
          name="username"
          children={ (field) => (
            <>
              <label htmlFor={ field.name }>Nom d'utilisateur :</label>
              <Input
                data-testid="username-input"
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e: any) => field.handleChange(e.target.value) }
                disabled={ loginIsPending }
                placeholder="Nom d'utilisateur"/>
            </>
          ) }
        />

        <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
          <Button type="primary" htmlType="submit">
            Connexion
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}