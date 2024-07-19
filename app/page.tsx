'use client'

import { Image, Container, Title, Button, List, Group, Text, rem, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import classes from '@/styles/Index.module.css';
import Link from 'next/link';
import { PageHandler } from './types';

const Page: PageHandler = () => {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> Restaruant management approach
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
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> - build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> - all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> - focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Link href="/auth">
              <Button color="orange" radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </Link>
          </Group>
        </div>
        <Image src={image.src} alt="Hero image" className={classes.image} />
      </div>
    </Container>
  );
}
export default Page;