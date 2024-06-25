import { Outlet } from 'react-router-dom';
import Header from '@/layouts/components/Header';

const DefaultLayout = () => {
  return (
    <div className='relative'>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
