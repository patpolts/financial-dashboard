'use client';

import { signIn } from 'next-auth/react';
import { Container, LoginCard, Title } from '@styles/login';
import { GoogleButton } from '@components/ui/GoogleButton';
import styled from 'styled-components';
import { useState } from 'react';

const ErrorMessage = styled.p`
  color: #e53e3e;  /* vermelho */
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

export default function LoginPage() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    setError('');
    setDisabled(true);

    try {
      const res = await fetch('/api/login-attempt', {
        method: 'POST',
        credentials: 'include',
      });
      if (res.status === 429) {
        const data = await res.json();
        setError(data.error);
        setDisabled(true);
        return;
      }
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch {
      setError('Erro! Muitas tentativas de login, tente novamente mais tarde ou cantate me@poltts.com.br!');
      setDisabled(false);
    }
  }

  return (
    <Container>
      <LoginCard>
        <Title>Painel Financeiro</Title>
        <GoogleButton onClick={handleLogin} disabled={disabled} />
         {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginCard>
       
    </Container>
  );
}
