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
  return (
    <form
      action={async (formData) => {
        const val = await login(formData);
        const containsField = (field: string) => {
          for (const error of val) {
            if (error.path.includes(field)) {
              return true;
            }
          }
          return false;
        };
        setUserNameError(containsField('username') && 'This field is required');
        setPasswordError(containsField('password') && 'This field is required');
      }}
    >
      <Section>
        <TextInput name="username" label="Username" error={usernameError} />
        <TextInput name="password" label="Password" type="password" error={passwordError} />
        <Button type="submit">Login</Button>
      </Section>
    </form>
  );
}
