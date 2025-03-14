import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';

const Page: NextPage = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
    </>
  );
};

export default Page;
