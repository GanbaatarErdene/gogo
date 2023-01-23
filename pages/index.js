import React from "react";
import Head from "next/head";
import Link from "next/link";
import Tses from "./tses";
import Footer from "@/components/menu/Footer";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title> Мэдээ Оны Онцлох Мэдээ</title>
      </Head>
    
      <Tses/>

      <Footer/>
    </>
  );
}
