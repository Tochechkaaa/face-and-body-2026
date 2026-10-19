import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Deck } from "./components/Deck/Deck";
import { Audience } from "./components/Audience/Audience";
import { Features } from "./components/Features/Features";
import { Program } from "./components/Program/Program";
import { Speakers } from "./components/Speakers/Speakers";
import { Expo } from "./components/Expo/Expo";
import { Partners } from "./components/Partners/Partners";
import { Tickets } from "./components/Tickets/Tickets";
import { Venue } from "./components/Venue/Venue";
import { Faq } from "./components/Faq/Faq";
import { Cta } from "./components/Cta/Cta";
import { Footer } from "./components/Footer/Footer";

// Точка збірки лендінга. Кожен блок — окрема папка в app/components/<Block>/.

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Deck />
        <Audience />
        <Features />
        <Program />
        <Speakers />
        <Expo />
        <Partners />
        <Tickets />
        <Venue />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
