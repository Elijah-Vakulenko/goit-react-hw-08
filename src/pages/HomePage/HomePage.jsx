import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './HomePage.module.css';
import AuthNav from '../../components/AuthNav/AuthNav';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Be closer to your friends and loved ones!</h1>
      <p className={s.description}>
        A simple way to gather all your important contacts...
      </p>
      {screenWidth >= 1024 ? (
        isLoggedIn ? <UserMenu /> : <AuthNav />
      ) : null}
    </div>
  );
};

export default HomePage;
