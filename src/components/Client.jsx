import { useState } from "react"
import { clients } from "../constants"
import styles from "../style"

const Client = () => {
  const [mouseOver,setMouseover]=useState(false)
  return (
<section className={`${styles.flexCenter} my-4`}> 
<div className={`${styles.flexCenter} flex-wrap w-full`}>
  {clients.map((item)=>{
    return <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
      <img src={item.logo} alt="companies" className={`sm:w-[192px] w-[100]px object-contain ss:w-[100px]`}  />
    </div>
  })}
</div>
</section>
  )
}

export default Client