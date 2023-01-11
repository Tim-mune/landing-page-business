import {feedback} from '../constants'
import Feedback from './Feedback'
import styles from '../style'
const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}> 
    <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient '/>
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] '>
      <h2 className={styles.heading2} >What are <br  className=' sm:block hidden'/> people saying about us?</h2>
      <div className='w-full md:mt-0 mt-6 '>
<p className={`${styles.paragraph}text-left max-w-[480px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit reiciendis harum illo facilis quae eum assumenda nostrum unde quidem?</p>
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
{feedback.map((item,index)=>{
  return <Feedback key={index} {...item}/>
})}
    </div>
    </section>
  )
}

export default Testimonials