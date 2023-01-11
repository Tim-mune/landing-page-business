import {apple,bill,google} from '../assets'
import styles ,{layout} from '../style'
const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-full h-full z-10 relative' />
        <div className='absolute z-[3] left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient'/>
         <div className='absolute z-[0] left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily controll your billing <br className='sm:block hidden'/> & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a. Veritatis, ullam.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple logo" className='w-[128px] h-[42px] object-contain cursor-pointer mr-5' />
           <img src={google} alt="google logo" className='w-[128px] h-[42px] object-contain cursor-pointer ml-5' />
        </div>
      </div>
    </section>
  )
}

export default Billing