import Section from '../components/Section'
import Cover from '../components/Cover'
import SocialNetwork from '../components/SocialNetworks';
import { BuyMeCoffee } from '../components';
import Title from '../components/Title'
// import styles from '../styles/Home.module.scss'

export default function Home() {
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
