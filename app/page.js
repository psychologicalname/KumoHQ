import CustomerJourney from "@/components/CustomerJourney";
import CustomerValue from "@/components/CustomerValue";
import Disclaimers from "@/components/Disclaimers";
import EngagingContent from "@/components/EngagingContent";
import Feature from "@/components/Feature";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import LimitedTimeOffer from "@/components/LimitedTimeOffer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <GetStarted />
      <LimitedTimeOffer />
      <CustomerJourney />
      <EngagingContent />
      <CustomerValue />
      <Integrations />
      <Disclaimers />
    </main>
  );
}
