import ProviderNotification from "@/components/_ui/notification/providerNotification";
import { schemaAuth } from "@/schemas/auth/schemaAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface UsePostReq {
  USER_EMAIL: string;
  USER_PASSWORD: string;
}

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaAuth),
  });

  const submitForm: SubmitHandler<UsePostReq> = async (formData) => {
    setIsLoading(true);
    signIn('credentials', {
      USER_EMAIL: formData.USER_EMAIL,
      USER_PASSWORD: formData.USER_PASSWORD,
      redirect: false,
    })
      .then((res) => {
        setIsLoading(false);
        if (res?.error) {
          ProviderNotification({
            title: res.status === 401 ? 'Erro de Login' : 'Erro',
            message: res.status === 401 ? 'Usuário ou senha incorretos.' : 'Ocorreu um erro ao tentar fazer o login. Tente novamente mais tarde.',
          });
        }
        if (res?.ok) {
          ProviderNotification({
            title: 'Sucesso',
            message: 'Usuário logado com sucesso!',
          });
          redirect('/produtos');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <TextInput
        {...register('USER_EMAIL')}
        label="Username"
        aria-label="Nome de usuário"
        autoComplete="username"
      />
      <PasswordInput
        {...register('USER_PASSWORD')}
        label="Senha"
        aria-label="Senha"
        autoComplete="current-password"
      />
      <Group justify="flex-end" mt="md">
        <Button fullWidth type="submit" disabled={isLoading} loading={isLoading}>
          Entrar
        </Button>
      </Group>
    </form>
  );
}
