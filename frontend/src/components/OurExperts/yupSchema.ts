import * as yup from 'yup';

export const schema = yup.object({
  firstName: yup.string().required('First name is required').min(3),
  lastName: yup.string().required('Last name is required').min(3),
  email: yup.string().email().required('Email is required'),
  number: yup.number().required('Phone number is required'),
  description: yup.string().notRequired()
})

export type FormData = yup.InferType<typeof schema>;