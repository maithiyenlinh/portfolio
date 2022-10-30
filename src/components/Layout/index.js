import Header from '../Header';
import Footer from '../Footer';
import PropTypes from 'prop-types';
import Cursor from '../Cursor';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Cursor />
      <div className='min-h-[calc(100vh-224px)]'>
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout

