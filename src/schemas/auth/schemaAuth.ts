import * as yup from 'yup'

export const schemaAuth = yup.object().shape({
  USER_EMAIL: yup
    .string()
    .required('Obrigatório'),
  USER_NAME: yup
    .string(),
  USER_PASSWORD: yup
    .string()
    .required('Obrigatório')
});
