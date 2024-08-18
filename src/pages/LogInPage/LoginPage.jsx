import LogInForm from '../../components/LogInForm/LogInForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Glad to see you again!</h1>
      <p className={s.description}>Just type your email and password to find a contact you're looking for...</p>
      <LogInForm />
    </div>
  );
};

export default LoginPage;