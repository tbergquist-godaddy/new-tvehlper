'use client';

import { useFormStatus, useFormState } from 'react-dom';

import login from '../actions/login';
import { initialState } from '../login-form';

import Button from '@/app/components/button';
import { Section } from '@/app/components/page-layout';
import TextInput from '@/app/components/text-input';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button isLoading={pending} type="submit">
      {pending ? '...Logging you in' : 'Login'}
    </Button>
  );
};

export default function LoginForm() {
  const [state, action] = useFormState(login, initialState);
  const loginError = state.form;
  return (
    <>
      <form action={action}>
        <Section>
          <TextInput name="username" label="Username" error={state.fields.username} />
          <TextInput
            name="password"
            label="Password"
            type="password"
            error={state.fields.password}
          />
          {loginError != null && <p className="text-red-600">{loginError}</p>}
          <SubmitButton />
        </Section>
      </form>
    </>
  );
}
