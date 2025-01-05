import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import DealsSection from '@/components/DealsSection';
import HomeOutdoorSection from '@/components/home&outdoor';
import Electronicandgadget from '@/components/electronic&gadet';



export default function RootLayout({ children }) {
  return (
  <>
      <body className="container mx-auto px-4 md:px-8 bg-gray-100 ">
        <Header />
        <HeroSection />
        <DealsSection />
        <HomeOutdoorSection />
        <Electronicandgadget />
        <Footer />
      </body>
    </>
  );
}
