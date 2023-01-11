import {features} from '../constants'
import styles ,{layout} from '../style'
import Button from './Button'

const FeatureCard=({key,id,icon,title,content,index})=>{
  return (
 <div className={`flex flex-row p-6 rounded-md ${index!==features.length-1?'mb-6':'mb-0'} feature-card`}>
  <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={icon} alt="icon" className='w-1/2 h-1/2 object-contain' />
  </div>
  <div className='flex-1 flex-col ml-3'>
<h4 className='font-poppins font-extralight leading-20 mb-1 text-white'>{title}</h4>
<p className='font-poppins font-extralight leading-20 mb-1 text-dimWhite text-2xl'>{content}</p>
  </div>
 </div>
  )
}

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
       <h2 className={styles.heading2}>
         You do the business, <br className="sm:block hidden" /> we’ll handle
        the money
       </h2>
        <p className={`${styles.paragraph} mt-4 max-w-[470px]`}>With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.</p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((item,index)=>{
          return <FeatureCard key={index} {...item} index={index}/>
        })}
      </div>
    </section>
  )
}
export default Business