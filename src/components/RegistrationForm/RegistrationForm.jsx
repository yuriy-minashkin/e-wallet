import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { FormLayout, Form, ButtonRegister } from './RegistrationForm.styled';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('E-mail is a required field'),
  password: yup
    .string()
    .min(6)
    .max(12)
    .required('Password is a required field'),
  passwordConfirmation: yup
    .string()
    .min(6)
    .max(12)
    .oneOf(
      [yup.ref('password'), null],
      'Confirm password must match the password'
    )
    .required('Confirm password is a required field'),
  name: yup.string().min(1).max(12).required('Please enter your name'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();
  const nameId = nanoid();

  return (
    <FormLayout>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={values => {
          dispatch(
            register({
              username: values.name,
              email: values.email,
              password: values.password,
            })
          );
        }}
        validationSchema={validationSchema}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting,
        }) => (
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor={emailId}>E-mail</label>
            <input
              type="email"
              name="email"
              id={emailId}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="example@mail.com"
            />
            <span>{errors.email && touched.email && errors.email}</span>
            <label htmlFor={passwordId}>Password</label>
            <input
              type="password"
              name="password"
              id={passwordId}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password (from 6 to 12 symbols)"
            />
            <span>
              {errors.password && touched.password && errors.password}
            </span>
            <label>Confirm password</label>
            <input
              type="password"
              name="passwordConfirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
              placeholder="Password (from 6 to 12 symbols)"
            />
            <span>
              {errors.passwordConfirmation &&
                touched.passwordConfirmation &&
                errors.passwordConfirmation}
            </span>
            <label>First name</label>
            <input
              type="text"
              name="name"
              id={nameId}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Adrian"
            />
            <span>{errors.name && touched.name && errors.name}</span>
            <ButtonRegister type="submit" disabled={isSubmitting}>
              {'Register'.toUpperCase()}
            </ButtonRegister>
            <Link to="/login">
              <button type="button">{'Log in'.toUpperCase()}</button>
            </Link>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};
