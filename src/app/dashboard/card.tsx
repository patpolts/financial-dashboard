import styled from 'styled-components';
import { ReactNode } from 'react';

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  color: ${({ theme }) => theme.colors.card.text};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,.06);
  display: flex;
  flex-direction: column;
  min-width: 100px;
  height: 200px;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover{
    transform: translateY(-4px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.card.title};
  opacity: .9;
  margin: 0;
`;

const CardValue = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
`;

const CardIcon = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;
  opacity: .7;
`;

interface CardProps {
  title: string;
  value: string;
  icon?: ReactNode;
}

export function Card({ title, value, icon }: CardProps) {
  return (
    <CardWrapper>
      <CardIcon>{icon}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardValue>{value}</CardValue>
    </CardWrapper>
  );
}