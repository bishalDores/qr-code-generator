import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Raleway } from "next/font/google";
import { theme } from "../theme";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "@mantine/core/styles.css";
import "./globals.scss";
import BaseChildrenWrapper from "@/components/BaseChildrenWrapper";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "QR code generator",
  description: "QR code generator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body className={raleway.className}>
        <NextTopLoader color="#7b2eda" />
        <MantineProvider theme={theme}>
          <BaseChildrenWrapper children={children} />
          <Toaster closeButton richColors />
        </MantineProvider>
      </body>
    </html>
  );
}
