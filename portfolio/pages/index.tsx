import LeftSide from '@/components/LeftSide';
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
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
