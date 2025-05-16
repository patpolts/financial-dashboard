import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  flex: 1;
  min-width: 200px;
`;

interface CardProps {
  title: string;
  value: string;
}

export function Card({ title, value }: CardProps) {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{value}</p>
    </CardWrapper>
  );
}