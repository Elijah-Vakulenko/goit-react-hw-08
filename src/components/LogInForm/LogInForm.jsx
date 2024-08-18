import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import * as Yup from 'yup';
import s from './LogInForm.module.css';

const LogInForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const Validation = Yup.object({
    email: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    password: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        autoComplete="off"
        validationSchema={Validation}
      >
        <Form className={s.form}>
          <label className={s.input_title}>Email</label>
          <Field className={s.label} name="email" required />
          <label className={s.input_title}>Password</label>
          <Field className={s.label} name="password" type="password" required />
          <button className={s.btn} type="submit">
            Sign in
          </button>
          <span className={s.text}>
            Don't have an account?{' '}
            <Link className={s.link} to="/register">
              Sign up
            </Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInForm;