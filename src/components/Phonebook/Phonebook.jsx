import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormLabel, Form, ErrorMessage, Button } from './Phonebook.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    )
    .required('Input name...'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Input number...'),
});

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, actions) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts(name, number));
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhonebookSchema}
      onSubmit={({ name, number }, actions) =>
        handleSubmit({ name, number }, actions)
      }
    >
      <Form>
        <FormLabel>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};


export default Phonebook


