'use client';

import { useState, useOptimistic } from 'react';
import { useRouter } from 'next/navigation';

import login from '../actions/login';

import Button from '@/app/components/button';
import { Section } from '@/app/components/page-layout';
import TextInput from '@/app/components/text-input';

type OptimisticData = {
  isLoading: boolean;
  buttonText: string;
};

export default function LoginForm() {
  // TODO: Formik
  const router = useRouter();
  const [usernameError, setUserNameError] = useState<boolean | string>(false);
  const [passwordError, setPasswordError] = useState<boolean | string>(false);
  const [loginError, setLoginError] = useState('');
  const [{ isLoading, buttonText }, setIsLoading] = useOptimistic<OptimisticData, boolean>(
    { isLoading: false, buttonText: 'Login' },
    (_, optimisticValue) => {
      return {
        isLoading: optimisticValue,
        buttonText: optimisticValue ? '...Logging you in' : 'Login',
      };
    },
  );

  return (
    <>
      <form
        action={async (formData) => {
          setUserNameError(false);
          setPasswordError(false);
          setLoginError('');
          setIsLoading(true);
          const val = await login(formData);
          if (val === undefined) {
            // login success
            return router.push('/favorites');
          }
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
          setIsLoading(false);
        }}
      >
        <Section>
          <TextInput name="username" label="Username" error={usernameError} />
          <TextInput name="password" label="Password" type="password" error={passwordError} />
          {loginError != null && <p className="text-red-600">{loginError}</p>}
          <Button isLoading={isLoading} type="submit">
            {buttonText}
          </Button>
        </Section>
      </form>
    </>
  );
}
