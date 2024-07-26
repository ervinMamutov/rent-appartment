import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/global.css';

export const metadata = {
  title: 'Rent-apartment | Best apartment for you',
  description: 'Find your best dream',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
