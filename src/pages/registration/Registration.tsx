import './Registration.scss';
import { formOptions, useForm } from '@tanstack/react-form';
import { Profile } from '../../stores/profile/profile.ts';
import { Button, Form, Input } from 'antd';
import { createProfile } from '../../stores/profile/profile.commands.ts';

export const Registration = () => {
  const options = formOptions<Profile>({
    defaultValues: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
    },
  });

  const {
    mutate: updateAsset,
    isPending: updateAssetIsPending,
  } = createProfile(onUpdateAssetError, onUpdateAssetSuccess);

  const form = useForm({
    ...options,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);

      updateAsset({
        assetType: form.values.assetType,
        effectiveDate: form.values.effectiveDate.toISOString(),
        expirationDate: form.values.expirationDate.toISOString(),
        name: form.values.name,
      });
    },
  });

  return (
    <div>
      <h1>Créé toi un compte</h1>

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
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e) => field.handleChange(e.target.value) }
                disabled={updateAssetIsPending}
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
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e) => field.handleChange(e.target.value) }
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
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e) => field.handleChange(e.target.value) }
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
                value={ field.state.value }
                onBlur={ field.handleBlur }
                onChange={ (e) => field.handleChange(e.target.value) }
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