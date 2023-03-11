import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import PricingSection from "./components/PricingSection";
import TeamSection from "./components/TeamSection";
import FooterSection from "./components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Moral Dev</title>
        <meta
          name="description"
          content="Website Developed by Ankit Parashar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css"
        />
        <link
          rel="stylesheet"
          href="//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        {/* <link href="https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap" rel="stylesheet"></link> */}
      </Head>
      <HomePage />
      <Services />
      <PricingSection />
      <TeamSection />
      <FooterSection />
    </>
  );
}
