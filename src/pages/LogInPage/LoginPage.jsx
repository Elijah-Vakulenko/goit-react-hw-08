import LogInForm from '../../components/LogInForm/LogInForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Welcome!</h1>
      <p className={s.description}>Enter your email and password to sign in</p>
      <LogInForm />
    </div>
  );
};

export default LoginPage;