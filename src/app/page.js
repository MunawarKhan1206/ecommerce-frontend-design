import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function RootLayout({ children }) {
  return (
  <>
      <body className="container mx-auto px-4 md:px-8 bg-gray-100 ">
        <Header />
        <HeroSection />
        <Footer />
      </body>
    </>
  );
}
