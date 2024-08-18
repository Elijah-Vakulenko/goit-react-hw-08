import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.notFound}>404</h1>
      <h2>Page Not Found</h2>
      <Link className={s.link} to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;