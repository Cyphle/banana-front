import './Registration.scss';
import { formOptions, useForm } from '@tanstack/react-form';
import { Profile } from '../../stores/profile/profile.ts';
import { Button, Form, Input } from 'antd';
import { useCreateProfile } from '../../stores/profile/profile.commands.ts';

export const Registration = () => {
  const onUpdateAssetError = (_: string) => {
  };

  const onUpdateAssetSuccess = () => {
  };

  const {
    mutate: createProfileMutation,
    isPending: createProfileIsPending,
  } = useCreateProfile(onUpdateAssetError, onUpdateAssetSuccess);

  const options = formOptions<Profile>({
    defaultValues: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
    },
  });

  const form = useForm({
    ...options,
    onSubmit: async ({ value }) => {
      createProfileMutation({
        username: value.username,
        email: value.email,
        firstName: value.firstName,
        lastName: value.lastName,
      });
    },
  });

  return (
    <div>
      <h1>Crée toi un compte</h1>

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
                disabled={createProfileIsPending}
                placeholder="Nom d'utilisateur"/>
            </>
          ) }
        />

        <form.Field
          name="email"
          children={ (field) => (
            <>
              <label htmlFor={ field.name }>Email :</label>
              <Input
                data-testid="email-input"
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e: any) => field.handleChange(e.target.value) }
                placeholder="Email"/>
            </>
          ) }
        />

        <form.Field
          name="firstName"
          children={ (field) => (
            <>
              <label htmlFor={ field.name }>Prénom :</label>
              <Input
                data-testid="firstname-input"
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e: any) => field.handleChange(e.target.value) }
                placeholder="Prénom"/>
            </>
          ) }
        />

        <form.Field
          name="lastName"
          children={ (field) => (
            <>
              <label htmlFor={ field.name }>Nom :</label>
              <Input
                data-testid="lastname-input"
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e: any) => field.handleChange(e.target.value) }
                placeholder="Nom"/>
            </>
          ) }
        />

        <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
          <Button type="primary" htmlType="submit">
            S'inscrire
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}