import "@/styles/globals.css";
import { Layout } from "/Users/ab7/Desktop/cv/twitterclone/src/components/Layout";
import { LoginModal } from "@/components/modals/LoginModal";
import { RegisterModal } from "@/components/modals/RegisterModal";
import type { AppProps } from "next/app";
import {Toaster} from 'sonner'
import { SessionProvider } from "next-auth/react";
import { MdCheckCircle, MdCircleNotifications } from "react-icons/md";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SessionProvider session ={pageProps.session}>
      <Toaster
        closeButton
        icons={{
        success: <MdCheckCircle className="stroke-green" />,
        error: <MdCircleNotifications className="stroke-destructive" />,
        }}
      />
    <LoginModal/>
    <RegisterModal/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
    </>
  );
};
