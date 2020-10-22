import { withFormik } from 'formik';
import UserRegistration from './UserRegistration';

const UserRegistrationForm = withFormik({
  validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.emailId) {
      errors.emailId = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)
    ) {
      errors.emailId = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  },
})(UserRegistration);

export default UserRegistrationForm;
