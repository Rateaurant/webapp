import AuthForm from "@/components/auth/AuthForm";
import { Image, Container } from "@mantine/core";
import classes from "@/styles/Auth.module.css";
import image from "../image.svg";
import { PageHandler } from "../types";
import Navbar from "@/components/Navbar";

const Page: PageHandler = ({ searchParams }) => {
  const mode = searchParams.mode == "login" ? "login" : "register";
  return (
    <>
      <Navbar path="auth" />
      <Container size="md">
        <div className={classes.inner}>
          <Image src={image.src} alt="Hero image" className={classes.image} />
          <div className={classes.content}>
            <AuthForm mode={mode} />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Page;
