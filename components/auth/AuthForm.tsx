"use client";

import { FunctionComponent, useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
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
  Popover,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { TwitterButton } from "@/components/auth/TwitterButton";
import * as Server from "@/scripts/server";
import { saveTokens } from "@/scripts/token";
import { DEV } from "@/scripts/is_dev";
import { useRouter } from "next/navigation";

const PASSWORD_PASSWORD_MINIMUM_LENGTH = 6;

const EMAIL_CHECK = (val: string) =>
  /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}/.test(val);
const PASSWORD_CHECK = (val: string) =>
  val.length >= PASSWORD_PASSWORD_MINIMUM_LENGTH;
const FORCE_SUCCESS = true;

type FormData = {
  email: string;
  username: string;
  password: string;
  terms: boolean;
};

type Response = {
  alright: boolean;
  message?: string;
};

async function onLogin(data: FormData): Promise<Response | null> {
  return await (
    await Server.request<Response>(Server.EndPoints.OwnerSignUp, null, data)
  )
    .on(Server.HTTPCodes.CREATED, (_) => {
      return { alright: true };
    })
    .on(Server.HTTPCodes.BAD_REQUEST, (_) => {
      return { alright: false, message: "Malformed data" };
    })
    .on(Server.HTTPCodes.NOT_ACCEPTABLE, (_) => {
      return { alright: false, message: "Email not registered" };
    })
    .on(Server.HTTPCodes.UNAUTHORIZED, (_) => {
      return { alright: false, message: "Not authenticated" };
    })
    .getResult();
}
async function onRegister(data: FormData): Promise<Response | null> {
  console.log(data);
  return await (
    await Server.request<Response>(Server.EndPoints.OwnerSignUp, null, data)
  )
    .on(Server.HTTPCodes.CREATED, async (response) => {
      const { access_token, refresh_token } =
        (await response.json()) as Server.Schema.TokenData;
      saveTokens(access_token, refresh_token);
      return { alright: true };
    })
    .on(Server.HTTPCodes.NOT_FOUND, async (res) => {
      return { alright: false, message: "Malformed data" };
    })
    .on(Server.HTTPCodes.NOT_ACCEPTABLE, (_) => {
      return { alright: false, message: "Email already registered" };
    })
    .getResult();
}
async function onSubmit(
  mode: "login" | "register",
  data: FormData
): Promise<Response | null> {
  if (mode == "login") {
    return await onLogin(data);
  }
  return await onRegister(data);
}

const AuthForm: FunctionComponent<
  PaperProps & {
    mode: "login" | "register";
  }
> = ({ mode, ...props }) => {
  const [type, toggle] = useToggle<"login" | "register">(
    mode == "login" ? ["login", "register"] : ["register", "login"]
  );
  const [popupOpened, setPopupOpened] = useState(false);
  const [popupMessage, setPopupMessage] = useState("Blank message");
  const router = useRouter();

  const form = useForm<FormData>({
    initialValues: {
      email: "",
      username: "",
      password: "",
      terms: false,
    },

    validate: {
      email: (val) => (EMAIL_CHECK(val) ? null : "Invalid email"),
      password: (val) =>
        PASSWORD_CHECK(val)
          ? null
          : `Password should include at least ${PASSWORD_PASSWORD_MINIMUM_LENGTH} characters`,
      terms: (val) => (val ? null : "Please accept the terms and conditions"),
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

      <form
        onSubmit={form.onSubmit(async (data: FormData) => {
          if (DEV && FORCE_SUCCESS) {
            router.push('/owner');
          }
          const response = await onSubmit(type, data);
          if (response == null) {
            return;
          }
          if (response.alright == false && response.message != undefined) {
            setPopupOpened(true);
            setPopupMessage(response.message);
            return;
          }
          if (response.alright) {
            router.push('/owner');
          }
        })}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Username"
              placeholder="Your name"
              value={form.values.username}
              onChange={(event) =>
                form.setFieldValue("username", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="johndoe@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              `Password should include at least ${PASSWORD_PASSWORD_MINIMUM_LENGTH} characters`
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs">
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button color="orange" type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
          <Popover
            styles={{
              dropdown: {
                background: "#d5302f",
                color: "white",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
            position="bottom"
            shadow="md"
            opened={popupOpened}
            onChange={setPopupOpened}>
            <Popover.Dropdown>
              <div className="flex gap-5">
                <div>{popupMessage}</div>
                <IconX
                  className="cursor-pointer"
                  onClick={() => {
                    setPopupOpened(false);
                  }}
                />
              </div>
            </Popover.Dropdown>
          </Popover>
        </Group>
      </form>
    </Paper>
  );
};
export default AuthForm;
