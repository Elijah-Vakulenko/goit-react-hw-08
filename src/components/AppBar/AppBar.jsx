import Navigation from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './AppBar.module.css';
import { useState } from 'react';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
      const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <header className={s.header}>
      <Navigation />
          {screenWidth <= 1024 ? (
        isLoggedIn ? <UserMenu /> : <AuthNav />
      ) : null}
    </header>
  );
};

export default AppBar;