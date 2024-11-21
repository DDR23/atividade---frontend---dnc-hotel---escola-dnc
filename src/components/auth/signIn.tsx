import usePost from "@/hooks/usePost";
import { schemaAuth } from "@/schemas/auth/schemaAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ProviderNotification from "../_ui/notification/providerNotification";

interface UsePostReq {
  USER_EMAIL: string;
  USER_PASSWORD: string;
}

interface UsePostRes {
  access_token: string;
}

export default function SignIn() {
  const { register, handleSubmit, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaAuth),
  });

  const watchData = watch();
  const { isPosting, response, error, sendRequest } = usePost<UsePostReq, UsePostRes>(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, watchData);

  useEffect(() => {
    if (error) {
      ProviderNotification({
        title: 'Erro',
        message: 'Ocorreu um erro ao tentar fazer o login.',
      });
    }

    if (response) {
      ProviderNotification({
        title: 'Sucesso',
        message: 'Usuário logado com sucesso!',
      });
    }
  }, [error, response]);

  return (
    <form onSubmit={handleSubmit(sendRequest)}>
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
        <Button
          fullWidth
          type="submit"
          disabled={isPosting}
          loading={isPosting}
        >
          Entrar
        </Button>
      </Group>
    </form>
  );
}
