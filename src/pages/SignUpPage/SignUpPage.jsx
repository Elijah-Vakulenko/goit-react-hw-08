import SignUpForm from '../../components/SignUpForm/SignUpForm';
import s from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Be In Touch!</h1>
      <p>Get your the most important contacts from any device in any corner of the world</p>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;