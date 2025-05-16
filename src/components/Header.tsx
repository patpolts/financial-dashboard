'use client';

import React from 'react';
import styled from 'styled-components';
import { ThemeSwitch } from './ui/ThemeSwitch';
import { useSession, signOut } from 'next-auth/react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.header.background};
  color: ${({ theme }) => theme.colors.header.text};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: right;
  gap: 1rem;
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.header.text};
  color: ${({ theme }) => theme.colors.header.text};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <HeaderContainer>
      <h1>Minhas finanças</h1>
      <MiddleSection>
        <ThemeToggle />
      </MiddleSection>
      <RightSection>
        {session?.user && (
          <>
            <span>{session.user.name}</span>
            {session.user?.image && <UserAvatar src={session.user.image} alt="Avatar do usuário" />}
            <LogoutButton onClick={() => signOut()}>Sair</LogoutButton>
          </>
        )}

      </RightSection>
    </HeaderContainer>
  );

}
