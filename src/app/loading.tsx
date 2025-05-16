import { ThemeClient } from '@components/ThemeClient';
import { Spinner } from '@components/ui/Spinner';

export default function Loading() {
  return (
    <ThemeClient serverTheme="light">
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Spinner />
      </div>
    </ThemeClient>
  );
}