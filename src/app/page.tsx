import { Header } from "./components/Header";
import { Breadcrumb } from "./components/Breadcrumb";
import { HeroTitle } from "./components/HeroTitle";
import { ConverterSection } from "./components/ConverterSection";
import { BodyContent } from "./components/BodyContent";
import { TrustpilotSection } from "./components/TrustpilotSection";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";

export default function Page() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <Header />
      <Breadcrumb />
      <HeroTitle />
      <ConverterSection />
      <BodyContent />
      <TrustpilotSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
