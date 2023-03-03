import Footer from './Footer';
import Navbar from './Navbar';
import { ButtonWhatsApp } from './shared';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <ButtonWhatsApp />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
