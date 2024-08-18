import React from 'react'
import s from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { BsTelephone } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { toast, Toaster } from 'react-hot-toast';


const Contact = ({name, number, id}) => {

  const dispatch = useDispatch();

    const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success(`Contact ${name} deleted successfully!`);
      })
      .catch(error => {
        console.log(error.message);
        toast.error('Failed to delete contact. Please try again.');
      });
  };

  return (
      <div className={s.wrapper}>
          <div className={s.person}>
              <div className={s.item}>
                <IoPersonCircleOutline className={s.icon} />
                <p>{name}</p>
              </div>
              <div className={s.item}>
                <BsTelephone className={s.icon} />
                <p>{number}</p>
              </div>
      </div>
      <Toaster position="top-right" />
      <button className={s.delBtn} type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  )
}

export default Contact

