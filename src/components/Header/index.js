
import logo from '../../images/logo.svg'
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH, PROJECT_PATH } from '../../constant/route';
import { useLocation, useNavigate } from 'react-router';

const navigation = [
  {
    name: 'home',
    url: HOME_PATH,
  },
  {
    name: 'project',
    url: PROJECT_PATH,
  },
  {
    name: 'about me',
    url: ABOUT_PATH,
  },
  {
    name: 'contact',
    url: CONTACT_PATH,
  }
]

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className='bg-black-background flex items-center fixed top-0 inset-x-0 z-40'>
      <div className='mx-auto max-w-screen-2xl w-full flex justify-between items-center'>
        <div>
          <img className='logo h-10' src={logo} />
        </div>
        <div className='text-primary-white flex justify-between items-center basis-2/5 capitalize'>
          {
            navigation?.map((nav) => (
              <div key={nav?.name} onClick={() => navigate(nav?.url)} 
                className={`clip-text relative pt-5 pb-4 after:w-full after:h-1 after:bottom-[1px] after:left-0 after:absolute after:z-50 font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-primary-blue hover:to-primary-purple 
                ${pathname === nav?.url ? 'after:bg-gradient-to-r after:from-primary-blue after:to-primary-purple' : 'after:bg-transparent'}`}>
                {nav?.name}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header;