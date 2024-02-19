'use client';

import { useState } from 'react';

import login from '../actions/login';

import Button from '@/app/components/button';
import { Section } from '@/app/components/page-layout';
import TextInput from '@/app/components/text-input';

export default function LoginForm() {
  // TODO: Formik
  const [usernameError, setUserNameError] = useState<boolean | string>(false);
  const [passwordError, setPasswordError] = useState<boolean | string>(false);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <>
      <form
        action={async (formData) => {
          setUserNameError(false);
          setPasswordError(false);
          setLoginError('');
          setLoading(true);
          const val = await login(formData);
          const containsField = (field: string) => {
            for (const error of val) {
              if (typeof error !== 'string' && error.path.includes(field)) {
                return true;
              }
            }
            return false;
          };
          setUserNameError(containsField('username') && 'This field is required');
          setPasswordError(containsField('password') && 'This field is required');
          if (typeof val === 'string') {
            setLoginError('Incorrect username or password');
          }
          setLoading(false);
        }}
      >
        <Section>
          <TextInput name="username" label="Username" error={usernameError} />
          <TextInput name="password" label="Password" type="password" error={passwordError} />
          {loginError != null && <p className="text-red-600">{loginError}</p>}
          <Button disabled={loading} type="submit">
            {loading ? 'loading...' : 'Login'}
          </Button>
        </Section>
      </form>
    </>
  );
}
