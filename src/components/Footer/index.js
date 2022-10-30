
import logo from '../../images/logo-white.svg';
import linkedIn from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import facebook from '../../images/facebook.svg';
import skype from '../../images/skype.svg';


const sns = [linkedIn, github, facebook, skype];

const Footer = () => {
  return (
    <div className='bg-black-background py-4'>
      <div className='max-w-screen-2xl mx-auto flex flex-col items-center gap-8'>
        <div>
          <img className='h-10' src={logo}/>
        </div>
        <div className='flex justify-between gap-8'>
          {
            sns?.map((media, index) => (
              <div key={index}>
                <img className='w-8 h-8' src={media} />
              </div>
            ))
          }
        </div>
        <p className='text-white-200'>Copyright 2021. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer;