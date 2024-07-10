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
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
