"use client";

import {
  Image,
  Container,
  Title,
  Button,
  List,
  Group,
  Text,
  rem,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "./image.svg";
import classes from "@/styles/Index.module.css";
import Link from "next/link";
import { PageHandler } from "./types";
import Navbar from "@/components/Navbar";

const Page: PageHandler = () => {
  return (
    <>
      <Navbar path="" />
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> Restaruant
              management approach
            </Title>
            <Text c="dimmed" mt="md">
              Enhance the food ordering and restaurant management experience
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon color="orange" size={20} radius="xl">
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }>
              <List.Item>
                <b>QR Codes</b> - OR codes at restaurant tables to introduce
                customers to the Rateaurant app
              </List.Item>
              <List.Item>
                <b>Menu</b> - A menu system for customers to browse and order
              </List.Item>
              <List.Item>
                <b>Notifications</b> - Automatic notifications to kitchen staff
                for each order, along with table numbers
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="/auth">
                <Button
                  color="orange"
                  radius="xl"
                  size="md"
                  className={classes.control}>
                  Get started
                </Button>
              </Link>
            </Group>
          </div>
          <Image src={image.src} alt="Hero image" className={classes.image} />
        </div>
      </Container>
    </>
  );
};
export default Page;
