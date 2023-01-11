import React from 'react'
import styles from './style'
import { Billing,Business,Button,CardDeal,Client,CTA,Feedback,Footer,GetStarted,Hero,Navbar,Stats,Testimonials } from './components'
const App = () => {
  return (
   <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <Navbar/>
      </div>
    </div>
    {/* hero section */}
    <div className={`bg-primary ${styles.flexStart}` }> 
<div className={`${styles.boxWidth}`}>
<Hero/>
</div>
    </div>

     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}` }> 
<div className={`${styles.boxWidth}`}>
<Stats/>
<Business/>
<Billing/>
<CardDeal/>
<Testimonials/>
<Client/>
<CTA/>
<Footer/>
</div>
</div>
</div>

  )
}

export default App