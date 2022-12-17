import Head from "next/head";
// import Image from 'next/image'
import Header from "../components/Header";
import Technologies from "../components/Technologies.js";
import Projects from "../components/Projects.js";
import Top from "../components/Top";
// import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AB&apos;s Portfolio</title>
        <meta name="description" content="BOUDRIOU ALLAOUA's Portfolio" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Header />

      <div className="w-full flex flex-col items-center overflow-hidden">
        <Top />
        <hr
          id="tech"
          className="h-3 w-20 rounded-lg bg-gray-300 mb-12 mt-40 mx-auto "
        />
        <Technologies />
        <FadeInSection>
          <hr
            id="projects"
            className="  h-3 w-20 rounded-lg bg-gray-300  mt-40 mx-auto"
          />
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <hr
            id="contact"
            className="h-3 w-20 rounded-lg bg-gray-300 mb-12 mt-40 mx-auto"
          />
          <Contact />
        </FadeInSection>
      </div>
      <Footer />
    </Layout>
  );
}
