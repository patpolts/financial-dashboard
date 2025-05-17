import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Página não encontrada!</h1>
      <p>Oops! A página que você procura não existe.</p>
      <Link href="/" style={{ textDecoration: 'underline', color: '#efb956' }}>
        Voltar à Home
      </Link>
    </div>
  );
}
