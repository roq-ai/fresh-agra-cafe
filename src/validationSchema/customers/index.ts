import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  address: yup.string().required(),
  phone_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
