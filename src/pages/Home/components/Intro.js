import DynamicIcon from '../../../components/Icon';
import Button from '../../../components/Button';

const Intro = () => {
  return (
    <div className='relative bg-main-background bg-no-repeat bg-cover bg-center max-h-[980px] h-[calc(100vh-64px)]'>
      <div className='relative top-1/4 translate-y-1/4 max-w-screen-2xl mx-auto'>
        <p className='text-white-100 uppercase tracking-[0.275em] text-small'>hello <DynamicIcon name='MdWavingHand' style='text-yellow' /> i&apos;m</p>
        <h1 className='text-primary-white uppercase tracking-[0.54em] text-huge'>mai linh</h1>
        <p className='text-white-100 text-large'>A <span className='capitalize text-primary-white'>web developer</span> based in Yokohama, Japan</p>
        <div className='flex gap-8 mt-8'>
          <Button classNames='uppercase py-4 px-10 tracking-[0.275em]'>get resume <DynamicIcon name='MdOutlineFileDownload' /></Button>
          <Button classNames='uppercase py-4 px-10 tracking-[0.275em]'>view project <DynamicIcon name='MdOutlineRemoveRedEye' /></Button>
        </div>
      </div>
      <div className='absolute w-[67px] h-[67px] rounded-full border-[4px] border-primary-blue bottom-1/2 translate-y-1/2 right-[5%] blur-[2px]'></div>
      <div className='absolute w-[250px] h-[250px] rounded-full border-[4px] border-primary-blue bottom-[30%] translate-y-1/2 right-[5%] blur-[2px]'></div>
      <div className='absolute w-[67px] h-[67px] rounded-full border-[4px] border-primary-blue bottom-[5%] left-1/2 translate-x-1/2'></div>
      <div className='absolute w-[38px] h-[38px] rounded-full border-[4px] border-primary-blue bottom-[12%] left-[54%] translate-x-1/2'></div>
      <div className='absolute w-[18px] h-[18px] bottom-[14%] left-[53%] translate-x-1/2 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full z-10'></div>
      <div className='absolute w-[38px] h-[38px] left-[15%] top-1/4 translate-y-1/4 bg-gradient-to-r blur-[6.94889px] from-primary-blue to-primary-purple rounded-full z-10'></div>
      <div className='absolute w-[164px] h-[164px] left-1/2 translate-y-1/2 top-[10%] bg-gradient-to-r blur-[10.4233px] from-primary-blue to-primary-purple rounded-full z-10'></div>
      <div className='absolute w-[242px] h-[242px] left-[-121px] bottom-[7%] bg-gradient-to-r blur-[6.94889px] from-primary-blue to-primary-purple rounded-full z-10'></div>
      <div className='absolute inset-x-0 bottom-0 bg-gradient-to-b from-overlay-first to-black-background w-full h-[17%] z-5'></div>
    </div>
  )
}

export default Intro;