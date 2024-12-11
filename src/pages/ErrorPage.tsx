import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='container mt-auto flex h-full min-h-svh flex-1 flex-col items-center justify-center gap-4'>
      <h1 className='text-8xl font-bold tracking-tight text-syntax'>
        404
      </h1>
      <p className='text-xg font-semibold'>Page not found</p>
      <div className='mt-8 flex gap-2'>
        <Button className='bg-syntaxDark text-zinc-50'>
          <Link to='/'>Go home</Link>
        </Button>

      </div>
    </div>
  );
};
export default ErrorPage;
