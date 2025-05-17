'use client';
import Link from 'next/link';

export default function ErrorPage({ message }: { message: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{textAlign: 'center'}}>Algo deu errado</h1>
      <p>{message}</p>
      <Link href="/" style={{ textDecoration: 'underline', color: '#efb956' }}>
        Voltar para a página inicial
      </Link>
    </div>
  );
}
