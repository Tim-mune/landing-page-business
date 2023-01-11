import {quotes} from '../assets'

const Feedback = ({id,content,name,title,img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-0 my-5 feedback-card ">
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain ' />
      <p className='font-poppins font-extralight text-2xl leading-5 text-white my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='rounded-full w-[50px] h-[50px]' />
        <div className='flex flex-col ml-4 '>
          <h4 className='font-poppins font-extralight text-2xl leading-5 text-white my-2'>{name}</h4>
          <p className='font-poppins font-extralight text-2xl leading-5 text-white my-2'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback