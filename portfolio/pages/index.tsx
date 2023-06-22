import { Navbar } from '@/components/Navbar';
import Head from 'next/head';
import React from 'react';

function Home() {
  return (
    <>
      <Head>
        <title>Barkın Köroğlu</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
      </main>
    </>
  );
}

export default Home;
