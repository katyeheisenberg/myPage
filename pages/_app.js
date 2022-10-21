import "../styles/reset.scss";
import "../styles/global.scss";
import Head from "next/head";
import Image from "next/image";
import Section from "../components/Section";
import Cover from "../components/Cover";
import SocialNetwork from "../components/SocialNetworks";
import { BuyMeCoffee } from "../components";
import Title from "../components/Title";

function MyApp() {
  return (
    <div>
      <Section>
        <Cover title="Kate <br /> Chicherina" />
        <SocialNetwork />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New post</Title>
      </Section>
    </div>
  );
}

export default MyApp;
