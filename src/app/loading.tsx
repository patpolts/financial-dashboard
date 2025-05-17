import { Spinner } from '@components/ui/Spinner';

export default function Loading() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spinner />
    </div>
  );
}