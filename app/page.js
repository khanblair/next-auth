'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import NatureImage from '@/public/khan.jpg'

const Home = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    <section>
      <h1>Use Router</h1>
      <button className="border p-2 bg-slate-500" onClick={() => router.push("about")}>About page</button>
      <button onClick={() => navigate("portfolio")}>Portfolio page</button>
      <Image 
      src={NatureImage} 
      alt="Nature image"
      />
    </section>
  )
}

export default Home
