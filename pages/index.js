import React from "react";
import Head from "next/head";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title> Мэдээ Оны Онцлох Мэдээ</title>
      </Head>
      {/* <div className='text-center '>
        <a className="text-3xl font-bold text-cyan-300">Доор байга үгийг унш</a>
      </div> */}

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="flex h-20 w-full items-center justify-center border-t bg-zinc-400">
          <a className="text-3xl font-bold text-cyan-100">
            Доор байга үгийг унш
          </a>
        </div>

        <main className="flex w-full flex-1 flex-row items-center justify-around py-2 text-center">
          <Link href="/register">
            <div className="text-lg border border-gray-300 px-10 py-2 bg-gray-100 rounded-lg cursor-pointer">
              Мэдээ Нийтлэгч
            </div>
          </Link>

          {/* <Link> */}
          <a className="text-3xl text-cyan-300">Сонголтоо хийгээрэй</a>
          {/* </Link> */}

          <Link href="/unshigch">
            <div className="text-lg border border-gray-300 px-10 py-2 bg-gray-100 rounded-lg cursor-pointer">
              Уншигч
            </div>
          </Link>
        </main>

        <footer className="flex h-20 w-full items-center justify-center border-t bg-slate-500">
          Уншаад насссс хахаха
        </footer>
      </div>
    </>
  );
}
