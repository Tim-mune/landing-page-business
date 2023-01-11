import { useState } from "react"
import {close,logo,menu} from '../assets'
import {navLinks} from '../constants'
const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  return (
  <nav className="w-full py-6 flex justify-between items-center navbar sticky top-0">
    <img src={logo} alt="viteTraders" srcset="" className="w-[130px] h-[30px]"/>
  <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    {navLinks.map((item,index)=>{
      const {id,title}=item
      return <li key={id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index===navLinks.length-1?'mx-0':'mx-10'} `}><a href={`#${id}`}>{title}</a></li>
    })}
  </ul>
{/* mobile devices navbar setup*/}
  <div className="sm:hidden flex flex-1 justify-end items-center">
<img src={toggle?close:menu} alt="menu" className="w-[28px] h-[28px] object-fill" onClick={()=>setToggle((prev)=>!prev)}/>
  </div>
  <div className={`${toggle ?"flex":"hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
      <ul className="list-none flex flex-col  justify-center items-center flex-1">
    {navLinks.map((item,index)=>{
      const {id,title}=item
      return <li key={id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index===navLinks.length-1?'mx-0':'mb-4'} `}><a href={`#${id}`}>{title}</a></li>
    })}
  </ul>
  </div>
  </nav>
  )
}

export default Navbar