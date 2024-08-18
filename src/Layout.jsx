import { Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
import s from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;