
const Button = ({styles}) => {
  return (
    <div>
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-light text-2xl rounded-lg outline-none text-primary ${styles} `}>Get started</button>
    </div>
  )
}

export default Button