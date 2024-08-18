import React from 'react';
import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {

  const dispatch = useDispatch();

  const initialValues = { //сюди  передаємо наші інпути
    name: '',
    number: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short') //задаємо мінімальне значення введеного в поле
      .max(50, 'Too long') //задаємо максимум 50 символів
      .required('Required'),//робимо поле обов'язковим для заповнення з відповідним меседжем
    number: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required')
  });

  const onSubmit = (values, actions) => {
         dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      }),
    )
      .then(() => {
        toast.success('Contact added successfully!');
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Failed to add contact. Please try again.');
      });
  };

  return (
    <div className={s.form_grid}>
      <Toaster position="top-right" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <label className='label' htmlFor="name">Name</label>
          <Field name="name" className={s.input} id="name" />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label className='label' htmlFor="number">Number</label>
          <Field name="number" className={s.input} id="number" />
          <ErrorMessage name="number" component="div" className={s.error} />

          <button className={s.btn} type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;