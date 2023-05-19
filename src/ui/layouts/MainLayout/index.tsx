import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>

      <div>navigation panel</div>
    </div>
  );
};

export default MainLayout;
