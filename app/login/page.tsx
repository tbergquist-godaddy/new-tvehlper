import { PageContainer } from '../components/page-layout';
import LoginForm from './components/login-form';

export default function Login() {
  return (
    <div className="flex justify-center">
      <PageContainer className="flex-1 md:max-w-center max-w-full">
        <h1 className="text-3xl font-bold">Login</h1>
        <LoginForm />
      </PageContainer>
    </div>
  );
}
