import {stats} from '../constants'
import styles from '../style'

const Stats = () => {
  return <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
{stats.map((item,index)=>{
  const {id,title,value}=item
  return <div key={id} className={`flex-1 flex justify-start items-center flex-row m-3 `}>
<h4 className='font-poppins font-medium xs:text-[40px] text-[30px] xs:leading-[50px] leading-[40px] text-dimWhite '>{value}</h4>
<p className='text-white font-poppins font-light xs:text-[40px] text-4xl xs:leading-[40px] leading-[30px] uppercase ml-2'>{title}</p>
  </div>
})}
  </section>
}

export default Stats