'use client';
import ErrorPage from '@components/ErrorPage';

export default function GlobalError({ error }: { error: Error }) {
  return <ErrorPage message={error.message} />;
}
