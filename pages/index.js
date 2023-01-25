import React from "react";
import Head from "next/head";
import IndexLayout from "@/components/layout/IndexLayout";
import TopCard from "@/components/news/TopCard";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <IndexLayout>
      <Head>
        <title> Мэдээ Оны Онцлох Мэдээ</title>
      </Head>
      <div className="flex flex-col gap-10">
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
        <TopCard />
      </div>
    </IndexLayout>
  );
}
