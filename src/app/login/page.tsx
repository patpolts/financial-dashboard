'use client';

import { signIn } from 'next-auth/react';
import { Container, LoginCard, Title } from '@styles/login';
import { GoogleButton } from '@components/ui/GoogleButton';

export default function LoginPage() {
  return (
    <Container>
      <LoginCard>
        <Title>Painel Financeiro</Title>
        <GoogleButton onClick={() => signIn('google', { callbackUrl: '/dashboard' })}  />
      </LoginCard>
    </Container>
  );
}
