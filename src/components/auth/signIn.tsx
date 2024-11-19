import { schemaSignin } from "@/schemas/auth/schemaSignIn";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SigninPostValues {
  USER_NAME?: string
  USER_PASSWORD?: string
}

export default function SignIn() {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaSignin)
  });

  const [posted, setPosted] = useState(false);
  const [data, setData] = useState<SigninPostValues>({ USER_NAME: '', USER_PASSWORD: '' });

  const submitForm: SubmitHandler<SigninPostValues> = (formData) => {
    setData(formData)
    setPosted(true)
    console.log('data', data)
    console.log('posted', posted)
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <TextInput
        {...register('USER_EMAIL')}
        label="Email"
        type="email"
      />
      <PasswordInput
        {...register('USER_PASSWORD')}
        label="Senha"
      />
      <Group justify="flex-end" mt="md">
        <Button fullWidth type="submit">Entrar</Button>
      </Group>
    </form>
  );
}
