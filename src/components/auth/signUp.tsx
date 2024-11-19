import { schemaSignup } from "@/schemas/auth/schemaSingUp";
import PasswordStrength, { requirements } from "@/utils/passwordStrength";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignupPostValues {
  USER_NAME?: string
  USER_PASSWORD?: string
}

function validatePassword(password: string): string[] {
  const errors = [];
  if (password.length <= 5) {
    errors.push("A senha deve ter pelo menos 6 caracteres");
  }
  requirements.forEach(requirement => {
    if (!requirement.re.test(password)) {
      errors.push(requirement.label);
    }
  });
  return errors;
}

export default function SignUp() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaSignup)
  });
  const watchPassword = watch("USER_PASSWORD", "");
  const [posted, setPosted] = useState(false);
  const [data, setData] = useState<SignupPostValues>({ USER_NAME: '', USER_PASSWORD: '' });

  const submitForm: SubmitHandler<SignupPostValues> = (formData) => {
    const passwordErrors = validatePassword(formData.USER_PASSWORD || '');
    // if (passwordErrors.length > 0) {
    //   notifications.show({
    //     title: 'Senha Invalida',
    //     message: `${passwordErrors.join(', ')}`,
    //     autoClose: 8000,
    //     color: 'red',
    //     icon: <IconX />
    //   });
    //   return;
    // }
    setData(formData);
    setPosted(true);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <TextInput
        {...register('USER_EMAIL')}
        label="Username"
        error={errors.USER_EMAIL?.message}
      />
      <PasswordInput
        {...register('USER_PASSWORD')}
        label="Senha"
      />
      <PasswordStrength value={watchPassword} />
      <Group justify="flex-end" mt="md">
        <Button fullWidth type="submit">Cadastrar</Button>
      </Group>
    </form>
  );
}
