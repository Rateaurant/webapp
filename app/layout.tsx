import type { Metadata } from "next";
import { createTheme, ColorSchemeScript, MantineProvider } from "@mantine/core";
import { IconoirProvider } from "iconoir-react";
import { Baloo_Bhai_2 } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { LayoutHandler } from "./types";

const font = Baloo_Bhai_2({ subsets: ["latin"] });
const theme = createTheme({
  colors: {
    orange: [
      "#fff4e3",
      "#ffe9cd",
      "#ffd19c",
      "#feb765",
      "#fea139",
      "#fe941d",
      "#fe8c0d",
      "#e37900",
      "#ca6a00",
      "#b05a00",
    ],
  },
});

export const metadata: Metadata = {
  title: "Rateaurant",
  description: "Rateaurant is a one-stop-shop for all your restaurant needs",
};

const RootLayout: LayoutHandler = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* https://realfavicongenerator.net/ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#de2c20"
        />
        <meta name="msapplication-TileColor" content="#505050" />
        <meta name="theme-color" content="#505050" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <ColorSchemeScript />
      </head>
      <body className={font.className}>
        <IconoirProvider
          iconProps={{
            color: "#000000",
            strokeWidth: 1.5,
            width: 24,
            height: 24,
          }}>
          <MantineProvider defaultColorScheme="light" theme={theme}>
            {children}
          </MantineProvider>
        </IconoirProvider>
      </body>
    </html>
  );
};
export default RootLayout;
