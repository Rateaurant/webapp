'use client'

import { FunctionComponent } from 'react';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { GoogleButton } from '@/components/auth/GoogleButton';
import { TwitterButton } from '@/components/auth/TwitterButton';
import * as Server from '@/scripts/server';
import { saveTokens } from '@/scripts/token';

const PASSWORD_PASSWORD_MINIMUM_LENGTH = 6;

const EMAIL_CHECK = (val: string) => /^\S+@\S+$/.test(val);
const PASSWORD_CHECK = (val: string) => val.length >= PASSWORD_PASSWORD_MINIMUM_LENGTH;

type FormData = {
  email: string;
  name: string;
  password: string;
  terms: boolean;
};

async function onLogin(data: FormData): Promise<Server.HandlerResponse | null> {
  return await ((await Server
    .request(Server.EndPoints.UserLogin, null, data))
    .on(Server.HTTPCodes.CREATED, (_) => {
      return { alright: true };
    })
    .on(Server.HTTPCodes.NOT_ACCEPTABLE, (_) => {
      return { alright: false, message: "Email already in use" }
    })
    .on(Server.HTTPCodes.NOT_FOUND, (_) => {
      return { alright: false, message: "Please fill valid responses" }
    })
    ).getResult();
    
}
async function onRegister(data: FormData): Promise<Server.HandlerResponse | null> {
  return await ((await Server
    .request(Server.EndPoints.UserLogin, null, data))
    .on(Server.HTTPCodes.OK, async (response) => {
      const { access_token, refresh_token } = await response.json() as Server.Schema.TokenData;
      saveTokens(access_token, refresh_token);
      return { alright: true };
    })
    //! Login and Register don't have consistent http codes for "fill valid responses"
    .on(Server.HTTPCodes.NOT_FOUND, (_) => {
      return { alright: false, message: "Please fill valid responses" }
    })
    .on(Server.HTTPCodes.NOT_ACCEPTABLE, (_) => {
      return { alright: false, message: "Email not registered" }
    })
    .on(Server.HTTPCodes.UNAUTHORIZED, (_) => {
      return { alright: false, message: "Invalid credientials" }
    })
    ).getResult();
}
async function onSubmit(mode: 'login' | 'register', data: FormData): Promise<Server.HandlerResponse | null> {
  if (mode == 'login') {
    return await onLogin(data);
  }
  return await onRegister(data);
}

const AuthForm: FunctionComponent<PaperProps & {
  mode: 'login' | 'register',
}> = ({ mode, ...props }) => {
  const [type, toggle] = useToggle<'login' | 'register'>(
    mode == 'login' ?
      ['login', 'register'] :
      ['register', 'login']
  );
  const form = useForm<FormData>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: false,
    },

    validate: {
      email: (val) => (EMAIL_CHECK(val) ? null : 'Invalid email'),
      password: (val) => (PASSWORD_CHECK(val) ? null : `Password should include at least ${PASSWORD_PASSWORD_MINIMUM_LENGTH} characters`),
      terms: (val) => (val ? null : 'Please accept the terms and conditions'),
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Rateaurant, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(async (data: FormData) => {
        console.log(data);
        const response = await onSubmit(type, data);
        if (response == null) {
          return;
        }
        if (response.alright == false && response.message) {
          form.setFieldError('email', response.message);
        }
      })}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="johndoe@gmail.com"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button color="orange" type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
export default AuthForm;