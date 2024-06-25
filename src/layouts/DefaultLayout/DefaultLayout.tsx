import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      Client
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
