import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik } from 'formik';
import { FormLayout, Form, ButtonLogIn } from './LoginForm.styled';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('E-mail is a required field'),
  password: yup
    .string()
    .min(6)
    .max(12)
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();

  return (
    <FormLayout>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          dispatch(
            logIn({
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
            <ButtonLogIn type="submit" disabled={isSubmitting}>
              {'Log In'.toUpperCase()}
            </ButtonLogIn>
            <Link to="/register">
              <button type="button">{'Register'.toUpperCase()}</button>
            </Link>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};
