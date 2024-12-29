import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import SubHeader1 from '@/components/Subheader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100">
        <Header />
        <Footer />
      </body>
    </html>
  );
}
