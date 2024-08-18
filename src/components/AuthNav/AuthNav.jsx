import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={s.access}>
      <NavLink className={s.link} to="/login">
        Log In
          </NavLink>
          <NavLink className={s.link} to="/register">
        Sign Up
      </NavLink>
    </nav>
  );
};

export default AuthNav;