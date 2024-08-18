import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}!</p>
      <button
        onClick={() => dispatch(logOut())}
        className={s.btn}
        type="button"
      >
        Log out
      </button>
    </div>
  );
};