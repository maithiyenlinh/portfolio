import Intro from './components/Intro';

const Home = () => {
  return (
    <div className='bg-black-background'>
      <Intro />
      <h3 className='capitalize text-primary-white text-center text-big'>
        <span className='clip-text hover:text-transparent hover:from-primary-blue hover:to-primary-purple hover:bg-gradient-to-tr'>projects i&apos;ve worked on</span>
      </h3>
      <div className='grid gril-cols-3'>
        <div></div>

      </div>
    </div>
  )
}

export default Home;