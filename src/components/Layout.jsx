import PropTypes from 'prop-types';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
