'use client';

import { signIn } from 'next-auth/react';
import { Container, LoginCard, Title } from '@styles/login';
import { GoogleButton } from '@components/ui/GoogleButton';
import Footer from '@components/Footer';

export default function LoginPage() {
  return (
    <Container>
      <LoginCard>
        <Title>Login</Title>
        <GoogleButton onClick={() => signIn('google')} />
      </LoginCard>
      <Footer />
    </Container>
  );
}
