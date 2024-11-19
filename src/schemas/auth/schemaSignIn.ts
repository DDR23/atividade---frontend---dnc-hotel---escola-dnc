import * as yup from 'yup'

export const schemaSignin = yup.object().shape({
  USER_EMAIL: yup
    .string(),
  USER_PASSWORD: yup
    .string()
});
